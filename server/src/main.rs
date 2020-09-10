use actix_identity::{CookieIdentityPolicy, IdentityService};
use actix_cors::Cors;
use actix_web::http::header;
use actix_web::{ middleware, web, App, HttpResponse, HttpServer };
use actix_http::cookie::SameSite;
use rand::Rng;

mod lib;
mod api;

const COOKIE_NAME: &str = "nacho";
const ALLOWED_ORIGIN: &str = "http://localhost:3000";

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    let private_key = rand::thread_rng().gen::<[u8; 32]>();

    HttpServer::new(move || { // `move` to take the ownership of `private_key`
        App::new()
            .wrap(middleware::Logger::default())
            .wrap(
                Cors::new()
                    .allowed_origin(ALLOWED_ORIGIN)
                    .allowed_methods(vec!["GET", "POST", "DELETE"])
                    .allowed_headers(vec![header::AUTHORIZATION, header::ACCEPT])
                    .allowed_header(header::CONTENT_TYPE)
                    .max_age(3600)
                    .supports_credentials() // Allow the cookie auth.
                    .finish(),
            )
            .wrap(IdentityService::new(
                CookieIdentityPolicy::new(&private_key)
                    .name(COOKIE_NAME)
                    .path("/")
                    .max_age_time(chrono::Duration::minutes(10))
                    .same_site(SameSite::Lax) // `Lax` by default, but to be explicit. POST isn't allowed for cross-site, though.
                    .secure(false),
            ))
            .service(
                web::scope("/api")
                    .service(
                        web::resource("/auth")
                            .route(web::post().to(api::user::login))
                            .route(web::delete().to(api::user::logout))
                    )
                    .service(
                        web::scope("/article")
                            .service(
                                web::resource("/all")
                                    .route(web::get().to(api::article::get_all))
                            )
                    )
                    .route("/", web::get().to(|| HttpResponse::Ok().body("api")))
            )
            .route("/", web::get().to(|| HttpResponse::Ok().body("/")))
    })
    .bind("127.0.0.1:5000")?
    .run()
    .await
}

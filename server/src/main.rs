use actix_cors::Cors;
use actix_web::{
    middleware, http, web, App, HttpResponse, HttpServer,
};
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
struct Entry {
    id: String,
}

async fn auth(entry: web::Json<Entry>) -> web::Json<Entry> {
    web::Json(Entry {
        id: entry.id.clone(),
    })
}

fn api_config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/api")
            .route("/", web::get().to(|| HttpResponse::Ok().body("api")))
            .route("/auth", web::post().to(auth))
    );
}

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .wrap(middleware::Logger::default())
            .wrap(
                Cors::new()
                    .allowed_origin("http://localhost:3000")
                    .allowed_methods(vec!["GET", "POST"])
                    .allowed_headers(vec![http::header::AUTHORIZATION, http::header::ACCEPT])
                    .allowed_header(http::header::CONTENT_TYPE)
                    .max_age(3600)
                    .finish(),
            )
            .configure(api_config)
            .route("/", web::get().to(|| HttpResponse::Ok().body("/")))
    })
    .bind("127.0.0.1:5000")?
    .run()
    .await
}

use actix_web::{ web, HttpResponse };

mod user;
mod article;

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/api")
            .route("/", web::get().to(|| HttpResponse::Ok().body("api")))
            .route("/auth", web::post().to(user::auth))
            .route("/articles", web::get().to(article::list))
    );
}

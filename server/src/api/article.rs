use actix_web::{ web };
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Article {
    id: i32,
    title: String,
    body: String,
}

impl Article {
    pub fn all() -> Vec<Article> {
        vec![
            Article { id: 1, title: "aaaa".into(), body: "aaaaaaaa".into() },
            Article { id: 2, title: "bbbb".into(), body: "bbbbbbbb".into() },
        ]
    }
}

pub async fn list() -> web::Json<Vec<Article>> {
    web::Json(Article::all())
}

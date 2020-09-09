use actix_identity::Identity;
use actix_web::{ web };
use serde::{Deserialize, Serialize};

use crate::lib::error::Error;

#[derive(Debug, Serialize, Deserialize)]
pub struct Article {
    id: i32,
    title: String,
    body: String,
}

impl Article {
    pub fn all() -> Vec<Article> {
        vec![
            Article {
                id: 1,
                title: "hello".into(),
                body: "I like your hair".into(),
            },
            Article {
                id: 2,
                title: "Need help".into(),
                body: "There is a giant spider in my house".into(),
            },
            Article {
                id: 3,
                title: "I am here".into(),
                body: "look behind you".into(),
            },
        ]
    }
}

pub async fn get_all(id: Identity) -> Result<web::Json<Vec<Article>>, Error> {
    println!("[article] ++++ get_all()");

    if let Some(user_id) = id.identity() {
        println!("[article] user_id: {}", user_id);
        Ok(web::Json(Article::all()))
    } else {
        println!("[article] user_id: (none)");
        Err(Error {
            message: "Need auth".into(),
            status: 401,
        })
    }
}

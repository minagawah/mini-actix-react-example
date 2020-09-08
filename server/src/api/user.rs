use actix_web::{ web };
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Entry {
    login_id: String,
    password: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct User {
    id: String,
    name: String,
}

pub async fn auth(entry: web::Json<Entry>) -> web::Json<User> {
    web::Json(User {
        id: entry.login_id.clone(),
        name: "Joe Evans".into(),
    })
}

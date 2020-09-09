use actix_identity::Identity;
use actix_web::{ web, HttpResponse };
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Entry {
    login_id: String,
    password: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct User {
    id: String,
    description: String,
}

/*
curl -i --request POST \
  --url http://localhost:5000/api/auth \
  --header 'content-type: application/json' \
  --data '{"login_id": "sarah", "password": "123"}'
 */
pub async fn login(id: Identity, entry: web::Json<Entry>) -> web::Json<User> {
    let login_id = entry.login_id.clone();
    println!("[user] ++++ login()");
    println!("[user] login_id: {}", login_id);
    id.remember(login_id.to_owned());
    web::Json(User {
        id: login_id,
        description: "perfect".into(),
    })
}

/*
curl -i --request DELETE \
  --url http://localhost:5000/api/auth \
  --header 'content-type: application/json'
 */
pub async fn logout(id: Identity) -> HttpResponse {
    println!("[user] ++++ logout()");
    id.forget();
    HttpResponse::Ok().finish()
}

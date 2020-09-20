FROM rust:1-slim-buster as base

ENV USER=root

WORKDIR /var/www/app
RUN cargo init
COPY Cargo.toml Cargo.toml
COPY src src
COPY static static
RUN cargo fetch

CMD [ "cargo", "test", "--offline" ]

FROM base AS builder
RUN cargo build --release --offline

FROM rust:1-slim-buster
WORKDIR /var/www/app

COPY --from=base /var/www/app/static /var/www/app/static
COPY --from=builder /var/www/app/target/release/mini-actix-react-example /usr/bin/mini-actix-react-example

EXPOSE 8080

CMD [ "/usr/bin/mini-actix-react-example" ]

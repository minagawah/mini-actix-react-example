#!/usr/bin/env bash

cd $(dirname "$0")
cd server
RUST_BACKTRACE=1 RUST_LOG=actix_web=debug cargo run

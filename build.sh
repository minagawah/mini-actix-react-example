#!/usr/bin/env bash

cd $(dirname "$0")
cd server
cargo build --release


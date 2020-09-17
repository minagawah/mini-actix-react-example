build:
	cd server; cargo build --release
run:
	cd server; \
	RUST_BACKTRACE=1 RUST_LOG=actix_web=debug cargo run

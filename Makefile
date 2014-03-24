
test:
	@./node_modules/.bin/mocha \
		--reporter spec

bench:
	@./node_modules/.bin/matcha \
		bench/index.js

.PHONY: test bench
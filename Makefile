
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

test: clean build
	@open http://localhost:9876/test.html

test-server:
	@serve -p 9876

.PHONY: clean test test-server

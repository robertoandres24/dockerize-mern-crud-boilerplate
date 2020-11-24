build:
	cd server && npm i && $(MAKE) build
	cd client && npm i && $(MAKE) build

run:
	docker-compose up

stop:
	docker-compose down

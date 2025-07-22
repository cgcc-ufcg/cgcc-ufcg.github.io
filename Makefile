BUILD-REPO=daltonserey/cgcc

build: index.md
	mkdir -p build
	cp -r docs build/
	cp -r js build/
	cp -r dados build/
	cp -r imagens build/
	cp css/site.css build/
	pandoc --standalone \
	       --css site.css \
           faq-reingresso.md > build/faq-reingresso.html
	pandoc --standalone \
	       --css site.css \
           faq-revisao.md > build/faq-revisao.html
	pandoc --standalone \
	       --css site.css \
           faq-prorrogacao.md > build/faq-prorrogacao.html
	pandoc --standalone \
	       --css site.css \
           faq-trancamentos.md > build/faq-trancamentos.html
	pandoc --standalone \
	       --css site.css \
           faq-complementares.md > build/faq-complementares.html
	pandoc --standalone \
	       --css site.css \
           faq-red.md > build/faq-red.html
	pandoc --standalone \
	       --css site.css \
           faq-red-antigo.md > build/faq-red-antigo.html
	pandoc --standalone \
	       --css site.css \
           index.md > build/index.html

deploy: build index.md
	rsync -ar build/ cgcc:public_html/

watch-build:
	cd build ;\
	gh run watch

clean:
	rm -rf build

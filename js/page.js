const innerText = elem => elem.innerText.toLowerCase();

export const lis_da_pagina = Array.from(document.querySelectorAll("li"));

export function update_page(pattern) {
    // reexibe todos os lis 
    lis_da_pagina.forEach(li => li.style.display = "");

    // exibe todos os filhos dos lis com match
    lis_da_pagina.forEach(li => {
        if (innerText(li).includes(pattern)) {
            setTimeout(() => {
                // exibe todos os ancestrais e filhos
                show_children_lis(li);
            }, 0);
        } else {
            // esconde todos os lis que não tenham o pattern
            li.style.display = "none";
        }
    });
}

export function show_children_lis(elem) {
    const lis = Array.from(elem.querySelectorAll("li"));
    lis.forEach(li => li.style.display = "");
}

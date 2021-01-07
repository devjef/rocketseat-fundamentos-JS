const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredo da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ]
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ]
    },
];

function totalCategories() {
    console.log(`O número de categorias é: ${booksByCategory.length}`);

    for (let category of booksByCategory) {
        console.log(`O total de livros da categoria ${category.category} é: ${category.books.length}`);
    };
};

totalCategories();

function totalAuthors() {

    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books ) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author);
            };
        };
    };

    console.log(`O número de autores é: ${authors.length}`);
};

totalAuthors();

function booksOfAuthor(author) {

    let books = [];

    for(let category of booksByCategory) {

        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title);
            };
        };
    };

    console.log(books.length ? `Livros do autor ${author}: ${books.join(', ')}` : `Autor não encontrado`);
};

booksOfAuthor('Augusto Cury');
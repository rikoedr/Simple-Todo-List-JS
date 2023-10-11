// Class untuk format objek dari todo
class Todo {
    constructor(title, description, status){
        this.title = title;
        this.description = description;
        this.status = status;
    }
}

// Variable untuk menyimpan objek-objek todo
const todolist = [];

// Function untuk menambahkan todo baru
const tambahTugasButton = document.getElementById("tambahTugas");

tambahTugasButton.addEventListener('click', (event) => {
    // Dapatkan isi form
    const title = document.getElementById('title').value;
    const deskripsi = document.getElementById('deskripsi').value;
    const status = document.getElementById('status').value;

    // Buat objek todo dan tambahkan dalam array
    const createTodo = new Todo(title, deskripsi, status);
    todolist.push(createTodo);

    // Refresh table dengan data terbaru
    refreshTable();
});

// Function untuk menghapus todo 
function deleteTodo(todoIndex){
    todolist.splice(todoIndex, 1);
    refreshTable();
}

// Function untuk mengganti background

// Refresh table
function refreshTable(){
    // DOM Traversal dari Table -> TBody
    const table = document.getElementById('data-todolist');
    const tableContent = table.getElementsByTagName('TBODY')[0];
    let number = 1;
    tableContent.innerHTML = ""; //clean table
    
    //insert latest todolist to table
    for(let todo of todolist){
        let deleteButton = `<button onclick="deleteTodo(${number - 1})" class="btn-delete">Hapus</button>`;
        let todoRow = `<tr>
                            <th>${number}</th>
                            <th>${todo.title}</th>
                            <th>${todo.description}</th>
                            <th>${todo.status}</th>
                            <th>${deleteButton}</th>
                            </tr>`;

        tableContent.innerHTML += todoRow;
        number++;
    }
}

// Sample todo list
function sampleData(){
    const todo1 = new Todo("C# Backend", "Membuat endpoint untuk login", "Progress");
    const todo2 = new Todo("JavaScript", "Belajar tentang DOM", "Completed");
    const todo3 = new Todo("C# Web MVC", "Buat Web Pokemon", "Progress");
    const todo4 = new Todo("Bootstrap", "Belajar dasar-dasar bootstrap", "Completed");

    todolist.push(todo1);
    todolist.push(todo2);
    todolist.push(todo3);
    todolist.push(todo4);
    refreshTable();
}

sampleData();
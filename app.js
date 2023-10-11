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


// Function untuk mengganti background

// Refresh table
function refreshTable(){
    const tableContent = document.getElementById('todolist-content');
    let number = 0;
    tableContent.innerHTML = ""; //clean table
    
    //insert latest todolist to table
    for(let todo of todolist){
        let deleteButton = `<button class="btn-delete">Hapus</button>`;
        let todoRow = `<tr>
                            <th>${number}</th>
                            <th>${todo.title}</th>
                            <th>${todo.deskripsi}</th>
                            <th>${todo.status}</th>
                            <th>${deleteButton}</th>
                            </tr>`;

        tableContent.innerHTML += todoRow;
        number++;
    }
}

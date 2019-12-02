package main

<<<<<<< HEAD
import(
	"github.com/gorilla/mux"
	"net/http"
	"encoding/json"
)

type User struct {
	ID int `json:"id"`
	Username string `json:"username"`
	Password string `json:"password"`
}

type Entity struct {
	ID int `json:"id"`
	Username string `json:"username"`
	Password string `json:"password"`
}

type Queue struct {
	ID int `json:"id"`
	Owner_id int `json:"Entity.id"`
	head int `json:head`
}

func getAllEntities(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for _, item := range users {
	  if item.ID == params["id"] {
		json.NewEncoder(w).Encode(item)
		break
	  }
	  return
	}
	json.NewEncoder(w).Encode(users)
  }

func main(){
	router := mux.NewRouter()

	router.HandleFunc("/getAllEntities", getAllEntities).Methods("GET")

	http.ListenAndServe(":9090", router)
}
=======
import "fmt"

func main() {
	fmt.Println("Hello World")
}
>>>>>>> 56ea56b700aa8a3c72043eb8bcf110756035c35a

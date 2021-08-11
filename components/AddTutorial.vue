<template>
  <div class="add-tutorial-container">
    <div class="heading">
      <h1>ADD A TUTORIAL</h1>
    </div>
    <div class="add-tutorial-form-container">
      <form class="add-tutorial-form" @submit.prevent="handleSubmit">
        <label>Title</label>
        <br />
        <input
          type="text"
          placeholder="Enter title..."
          class="input-title"
          v-model="title"
        />
        <br />
        <br />

        <label>Description</label>
        <br />
        <input
          type="text"
          placeholder="Enter description..."
          class="input-description"
          v-model="description"
        />
        <br />
        <br />
        <div class="submit-button-container">
          <button type="submit" class="submit-button">
            ADD
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/tutorial.service";

export default {
  data() {
    return {
      id: null,
      title: "",
      description: "",
      published: false,
      submitted: false
    };
  },
  methods: {
    handleSubmit() {
      console.log("Submit function!");
      if (this.title == "" || this.description == "") {
        alert("Fill both fields!");
      } else {
        var data = {
          title: this.title,
          description: this.description
        };

        TutorialDataService.create(data)
          .then(response => {
            this.id = response.data.id;
            this.title = response.data.title;
            this.description = response.data.description;
            this.published = response.data.published;
            this.submitted = true;

            console.log(response.data);
            alert("Added successfully!");

            this.title = "";
            this.description = "";
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  }
};
</script>

<style lang="scss">
.add-tutorial-container {
  width: 90%;
  margin: 0 auto;
  border: 1px solid black;

  .heading {
    h1 {
      text-align: center;
    }
  }
}

.add-tutorial-form {
  width: 40%;
  margin: 2rem auto;

  .input-title,
  .input-description {
    height: 2rem;
    width: 90%;
    border-radius: 0;
    outline: none;
    border: 1px solid black;
    font-size: 1rem;

    padding: 0 0.5rem;

    &:focus {
      background-color: #f9f9f9;
    }
  }
}

.submit-button-container {
  text-align: center;
}

.submit-button {
  height: 2.5rem;
  width: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: $primary-color;
  color: white;
  border: 1px solid black;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: $primary-hover-color;
  }
}

@media screen and (max-width: 900px) {
  .add-tutorial-form {
    width: 50%;
  }
}

@media screen and (max-width: 500px) {
  .add-tutorial-form {
    width: 80%;
  }
}
</style>

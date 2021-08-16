<template>
  <div class="individual-tutorial-container">
    <div class="individual-tutorial-heading">
      <h1>TUTORIAL</h1>
    </div>
    <div class="individual-tutorial-body">
      <div class="individual-tutorial-division">
        <div class="individual-tutorial">
          <h4>TITLE</h4>
          <input
            type="text"
            class="input-title"
            v-model="currentTutorial.title"
            placeholder="Enter title..."
          />
          <h4>DESCRIPTION</h4>
          <input
            type="text"
            class="input-description"
            v-model="currentTutorial.description"
            placeholder="Enter description..."
          />
          <h4>STATUS</h4>
          <p>{{ currentTutorial.published ? "Published" : "Pending" }}</p>
          <div class="status-buttons-container">
            <button
              type="button"
              class="publish-button"
              @click="updatePublished(!currentTutorial.published)"
            >
              {{ currentTutorial.published ? "UNPUBLISH" : "PUBLISH" }}
            </button>
            <button type="button" class="update-button" @click="updateTutorial">
              UPDATE
            </button>
            <button type="button" class="delete-button" @click="deleteTutorial">
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/tutorial.service";

export default {
  data() {
    return {
      id: this.$route.params.id,
      currentTutorial: {
        id: null,
        title: "",
        description: "",
        published: false
      }
    };
  },
  mounted() {
    this.getTutorial(this.id);
  },
  methods: {
    getTutorial(id) {
      TutorialDataService.get(id)
        .then(response => {
          this.currentTutorial = response.data;
          console.log(this.currentTutorial);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updatePublished(status) {
      console.log(status);
      if (window.confirm("Change the status of Tutorial?")) {
        var data = {
          id: this.currentTutorial.id,
          title: this.currentTutorial.title,
          description: this.currentTutorial.description,
          published: status
        };

        TutorialDataService.update(this.currentTutorial._id, data)
          .then(response => {
            console.log(response);
            this.getTutorial(this.id);
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    updateTutorial() {
      if (window.confirm("Update the details?")) {
        TutorialDataService.update(this.id, this.currentTutorial)
          .then(response => {
            console.log(response.data);
            alert("Updated successfully!");
            this.$router.push("/tutorials");
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    deleteTutorial() {
      if (window.confirm("Delete the tutorial?")) {
        TutorialDataService.delete(this.id)
          .then(response => {
            console.log(response.data);
            this.$router.push("/tutorials");
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
.individual-tutorial-container {
  width: 90%;
  margin: 2rem auto;
  border: 1px solid black;
}

.individual-tutorial-heading {
  h1 {
    text-align: center;
    font-weight: 700;
  }
}

.individual-tutorial-body {
  margin: 2rem 0;
}

.individual-tutorial-division {
  width: 50%;
  margin: 0 auto;
}

.individual-tutorial {
  text-align: center;

  h4 {
    font-weight: 700;
    margin: 1.5rem 0;
  }

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

.status-buttons-container {
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
}

.publish-button {
  height: 2rem;
  width: 8rem;
  font-size: 1rem;
  border-radius: 0;
  background-color: #3d9cde;
  color: white;
  transition: all 0.5s;
  cursor: pointer;
  font-weight: 700;
  border: 1px solid black;
  margin: 0.5rem 0;

  &:hover {
    background-color: #2d7ab1;
  }
}

.update-button {
  @extend .publish-button;
  background-color: #2c9d2b;

  &:hover {
    background-color: #177a16;
  }
}

.delete-button {
  @extend .publish-button;
  background-color: rgb(241, 19, 19);

  &:hover {
    background-color: rgb(196, 21, 21);
  }
}

@media screen and (max-width: 900px) {
  .status-buttons-container {
    flex-direction: column;
    align-items: center;
  }

  .individual-tutorial-division {
    width: 60%;
  }
}

@media screen and (max-width: 600px) {
  .individual-tutorial-division {
    width: 90%;
  }
}
</style>

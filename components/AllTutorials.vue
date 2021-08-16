<template>
  <div class="show-tutorials-container">
    <div class="heading">
      <h1>TUTORIALS</h1>
    </div>
    <div class="show-tutorials-division">
      <div class="search-tutorial-container">
        <input
          type="search"
          class="input-search"
          v-model="searchTitle"
          @change="handleSearchChange"
        />
        <button type="button" class="search-button" @click="searchByTitle">
          SEARCH
        </button>
      </div>
      <div class="tutorials-container">
        <div class="tutorials-list-container">
          <div class="tutorials-list-heading">
            <h3>TUTORIALS</h3>
          </div>
          <div class="tutorials-list" v-if="tutorials.length">
            <ul class="tutorial-wrapper">
              <div v-for="(tutorial, index) in tutorials" :key="index">
                <li
                  :class="[index == currentIndex ? 'active' : '', 'tutorial']"
                  @click="setActiveTutorial(tutorial, index)"
                >
                  {{ tutorial.title }}
                </li>
              </div>
            </ul>
          </div>
          <div v-else-if="!tutorials.length && error == ''">
            <h5 style="text-align:center;font-weight:700;margin: 1.5rem 0;">
              LOADING TUTORIALS...
            </h5>
          </div>
          <div v-else-if="!tutorials.length && error == null">
            <h5 style="text-align:center;font-weight:700;margin: 1.5rem 0;">
              NO TUTORIALS FOUND!
            </h5>
          </div>
          <div v-else>
            <p style="text-align:center;color:red;">{{ error }}</p>
          </div>
          <div class="delete-tutorials">
            <button
              type="button"
              class="delete-tutorials-button"
              v-if="tutorials.length"
              @click="removeAllTutorials"
            >
              REMOVE ALL
            </button>
          </div>
        </div>
        <div class="tutorial-details-container">
          <div class="tutorial-details-heading">
            <h3>TUTORIAL DETAILS</h3>
          </div>
          <div
            class="tutorial-details"
            v-if="currentTutorial != null && currentTutorial != ''"
          >
            <p><strong>Title: </strong>{{ currentTutorial.title }}</p>
            <p>
              <strong>Description: </strong>{{ currentTutorial.description }}
            </p>
            <p>
              <strong>Status: </strong
              >{{ currentTutorial.published ? "Published" : "Pending" }}
            </p>
            <nuxt-link :to="'/tutorials/' + tutorials[currentIndex]._id">
              <button type="button" class="edit-button">EDIT</button>
            </nuxt-link>
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
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",
      error: ""
    };
  },
  mounted() {
    this.getTutorials();
  },
  methods: {
    getTutorials() {
      TutorialDataService.getAll()
        .then(response => {
          this.tutorials = response.data;
          this.error = null;
          console.log(this.tutorials);
        })
        .catch(e => {
          console.log(e);
          this.error = e.message;
          console.log(this.error);
        });
    },
    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },
    refreshList() {
      this.getTutorials();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },
    removeAllTutorials() {
      if (window.confirm("Remove all tutorials?")) {
        TutorialDataService.deleteAll()
          .then(response => {
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    searchByTitle() {
      if (this.searchTitle == "") {
        alert("Enter something!");
      } else {
        TutorialDataService.findByTitle(this.searchTitle)
          .then(response => {
            this.tutorials = response.data;
            console.log(response.data);
            if (this.tutorials.length == 0) {
              alert("No tutorial found!");
            }
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    handleSearchChange(e) {
      console.log(e);
      if (e.target.value == "") {
        this.refreshList();
      }
    }
  }
};
</script>

<style lang="scss">
.active {
  background-color: #326dd8;
  color: white;
}

.show-tutorials-container {
  width: 90%;
  margin: 0 auto;
  border: 1px solid black;

  .heading {
    h1 {
      font-weight: 700;
      text-align: center;
      font-size: 2rem;
    }
  }
}

.show-tutorials-division {
  width: 90%;
  margin: 0 auto;
}

.search-tutorial-container {
  text-align: center;
  margin: 2rem 0;
}

.input-search {
  height: 2rem;
  width: 20rem;
  border: 1px solid black;
  outline: none;
}

.search-button {
  height: 2rem;
  width: 8rem;
  font-size: 1rem;
  border-radius: 0;
  border: none;
  background-color: $primary-color;
  color: white;
  transition: all 0.5s;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background-color: $primary-hover-color;
  }
}

.tutorials-container {
  display: flex;
}

.tutorials-list-container,
.tutorial-details-container {
  width: 50%;
}

.tutorials-list-container {
  margin-bottom: 4rem;
}

.tutorials-list-heading {
  h3 {
    margin: 0;
    text-align: center;
    font-weight: 700;
    font-size: 1.5rem;
  }
}

.tutorials-list {
  width: 80%;
  margin: 2rem auto;
}

.tutorial-wrapper {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid black;

  div {
    &:not(:last-child) {
      border-bottom: 1px solid black;
    }
  }
}

.tutorial {
  padding: 1rem;
  cursor: pointer;
}

.delete-tutorials {
  text-align: center;
}

.delete-tutorials-button {
  height: 2rem;
  width: 8rem;
  font-size: 1rem;
  border-radius: 0;
  border: none;
  background-color: #e23c3c;
  color: white;
  transition: all 0.5s;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background-color: #cf2828;
  }
}

.tutorial-details-heading {
  h3 {
    text-align: center;
    margin: 0;
    font-weight: 700;
    font-size: 1.5rem;
  }
}

.tutorial-details {
  padding: 2rem 0;
}

.edit-button {
  height: 2rem;
  width: 8rem;
  font-size: 1rem;
  border-radius: 0;
  border: none;
  background-color: #2c9d2b;
  color: white;
  transition: all 0.5s;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background-color: #177a16;
  }
}

@media screen and (max-width: 600px) {
  .tutorials-container {
    flex-direction: column;
    margin: 3rem 0;
  }

  .tutorials-list-container,
  .tutorial-details-container {
    width: 100%;
  }

  .search-tutorial-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 5rem;
    justify-content: space-between;
  }

  .input-search {
    width: 80%;
  }
}
</style>

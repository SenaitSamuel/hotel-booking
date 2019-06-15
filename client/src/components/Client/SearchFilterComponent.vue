<template>
  <div class=" [ container ] " >
    <div class=" [ dropdown ]  [ col-md-6 mt-5 mb-5 justify-content-center ] " v-if="options" >
            <div class="input-group  ">
                <input type="text" class="form-control typeahead border-primary border-right-0"
                 @focus="showOptions()"
                  @blur="exit()"
                  @keyup="keyMonitor"
                  v-model="searchFilter"
                  :disabled="disabled"
                  :placeholder="placeholder"
                  />

                <div class="input-group-append">
                    <button type="submit" class="btn btn-outline-primary border-left-0">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>

    <!-- Dropdown Menu -->
    <div class=" [ dropdown-content ]  [ mx-1 ]  "
      v-show="optionsShown">
      <div
        class="dropdown-item "
        @mousedown="selectOption(option)"
        v-for="(option, index) in filteredOptions"
        :key="index">
          {{ option.establishmentName}}
      </div>
    </div>
  </div>
        <div class=" [ row ] ">
       <div v-for="(selected, index) in  filteredOptions " :key="index" class=" [ col-md-4  ] [ mt-3 mb-3 ]  " >
         <div class=" [ card ]   [ bg-light mb-4 ] ">
            <HotelComponent
              :image=" selected.imageUrl "
              :name=" selected.establishmentName"
              :price=" selected.price"
            />
            <router-link v-bind:to="'/hotelDetail/' + selected.id"  class=" [ btn btn-primary btn-lg btn-block ] " tag="button">View More</router-link>
          </div>
        </div>
     </div>
  </div>
</template>

<script>
import axios from 'axios';
import HotelComponent from '@/components/Client/HotelComponent.vue';
import style from '@/styles.scss';
  export default {
    name: 'Dropdown',
    template: 'Dropdown',
     components: {
    HotelComponent,

  },
    props: {

      placeholder: {
        type: String,
        required: false,
        default: 'Please select an option',
        note: 'Placeholder of dropdown'
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
        note: 'Disable the dropdown'
      },
      maxItem: {
        type: Number,
        required: false,
        default: 6,
        note: 'Max items showing'
      }
    },
    data() {
      return {
        selected: {},
        optionsShown: false,
        searchFilter: '',
        options:[]
      }
    },
      created() {
    // Fetch Data
     this.fetchData();
     this.$emit('selected', this.selected);
},
    computed: {
      filteredOptions() {
      return this.options.filter((hotel) =>{
        return hotel.establishmentName.toLowerCase().includes(this.searchFilter.toLowerCase());
      })
    }
      },
    methods: {
      fetchData: function () {
           axios.get('./establishments.json' )
           .then(response => this.options = response.data)
     },
      selectOption(option) {
        this.selected = option;
        this.optionsShown = false;
        this.searchFilter = this.selected.establishmentName;
        this.$emit('selected', this.selected);
      },
      showOptions(){
        if (!this.disabled) {
          this.searchFilter = '';
          this.optionsShown = true;
        }
      },
      exit() {
        if (!this.selected.id) {
          this.selected = {};
          this.searchFilter = '';
        } else {
          this.searchFilter = this.selected.establishmentName;
        }
        this.$emit('selected', this.selected);
        this.optionsShown = false;
      },
      // Selecting when pressing Enter
      keyMonitor: function(event) {
        if (event.key === "Enter" && this.filteredOptions[0])
          this.selectOption(this.filteredOptions[0]);
      }
    },

  };
</script>


<style lang="scss" scoped>
$hover-color: #fa8900;

 .dropdown {
    position: relative;
    display: block;
    input {
      cursor: pointer;
      border-radius: 3px;
      &:hover {
        background: #f8f8fa;
      }
    }
    .dropdown-content {
      position: absolute;
      background-color: #fff;
      min-width: 280px;
      max-height: 248px;
      border: 1px solid #e7ecf5;
      box-shadow: 0px -8px 34px 0px rgba(0,0,0,0.05);
      overflow: auto;
      z-index: 1;

      .dropdown-item {
        color: black;
        text-align: left;
        font-size: .7em;
        line-height: 1em;
        text-decoration: none;
        display: block;
        cursor: pointer;
        &:hover {
          background-color: $hover-color;
        }
      }
    }
    }


</style>

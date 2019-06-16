<template>
  <div class=" [ container-fluid ] " >
    <div class=" [ row  row-dropdown mt-0]  [ justify-content-center ] ">
    <div class=" [ dropdown ]  [ col-md-6 mt-5 mb-5 ] "  >
            <div class="input-group  ">
                <input type="text" class="form-control typeahead border-primary border-right-0"
                 @focus="showOptions()"
                  v-model="searchFilter"
                    @keydown.down="onDownKey"
                    @keydown.up="onUpKey"
                    placeholder="f.eks.Oslo"
                  />

                <div class="input-group-append">
                    <button type="submit" @click="onEnterKey" class="btn btn-outline-primary border-left-0">
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
        @keyEnter="selectOption(option)"

        v-for="(option, index) in filteredOptions"
        :key="index">
          {{ option.establishmentName}}
      </div>
    </div>
  </div>
  </div>
       <div class=" [ container mt-5 ] ">
       <div class=" [ row ] ">
       <div v-for="(selected, index) in  filteredOptions " :key="index" class=" [ col-md-4  ] [ mt-3 mb-3 ]  "  >
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

    data() {
      return {
        selected: {},
        optionsShown: false,
        searchFilter: '',
        establishments:[]
      }
    },
      created() {
    // Fetch Data
     this.fetchData();
     this.$emit('selected', this.selected);
},
    computed: {
      filteredOptions() {
      return this.establishments.filter((hotel) =>{
        return hotel.establishmentName.toLowerCase().includes(this.searchFilter.toLowerCase());
      })
    }
      },
    methods: {
      fetchData: function () {
           axios.get('./establishments.json' )
           .then(response => this.establishments = response.data)
     },
      selectOption(option) {
        this.selected = option;
        this.optionsShown = false;
        this.searchFilter = this.selected.establishmentName;
        this.$emit('selected', this.selected);
      },
      showOptions(){
          this.searchFilter = '';
          this.optionsShown = true;
      },
      onUpKey() {
                if(this.selected == 0) {
                  return
                }
                this.selected  -=1
            },
             onDownKey() {
                if(this.selected >= this.filteredOptions.length-1) {
                  return
                }
                this.selected +=1
            },
       onEnterKey() {
                const option = this.filteredOptions[0]
                if(option) {
                    this.selectOption(option)
                }

            },
    },

  };
</script>


<style lang="scss" scoped>
$form-color: #e5e5e6;
$hover-color: #fa8900;

 .row-dropdown{
   background-color:$form-color;

 }
 .dropdown {
    position: relative;
    display: block;
    input {
      cursor:text;
      border-radius: 10px;
      border: 1px solid $hover-color;
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
        border-bottom: 1px solid grey;
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

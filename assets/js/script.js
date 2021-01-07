var app = angular.module("myApp", ["isteven-multi-select"]);

app.controller("myController", function ($scope, $http) {
  //Remove items when clicking X in Tags
  $scope.removeItem = ($event, itemsSelected, itemList) => {
    // const itemToRemove = $event.currentTarget.innerText;
    //Taking the tag item
    const tagToRemove = angular.element($event.target).attr("tag-data");
    var itemsSelected = itemsSelected;
    var itemsList = itemList;
    // itemsSelected = [];
    //Removing the item from the itemsSelected
    const dataRemoved = itemsSelected.filter((item) => {
      item.isOn = false;
      // console.log("item", item);
      return item.name !== tagToRemove;
    });
    //Changing the state from the itemsList
    for (let i = 0; i < itemsList.length; i++) {
      if (itemsList[i].name == tagToRemove) {
        itemsList[i].isOn = false;
      }
    }

    // console.log("ItemToRemove", itemToRemove);
    // console.log("Data Removed", dataRemoved);
    itemsSelected = dataRemoved;
    console.log("Items selected end", itemsSelected);
    // console.log("Website List", $scope.websitesList);
  };

  //Website
  $scope.selectText = {
    selectAll: "Select All",
    selectNone: "Unselect All",
    reset: "Undo all",
    search: "Select",
    nothingSelected: "Select", //default-label is deprecated and replaced with this.
  };

  $scope.websitesList = [
    { name: "google.com" },
    { name: "youtube.com" },
    { name: "tmall.com" },
    { name: "baidu.com" },
    { name: "qq.com" },
    { name: "facebook.com" },
    { name: "sohu.com" },
    { name: "taobao.com" },
    { name: "360.cn" },
    { name: "jd.com" },
    { name: "amazon.com" },
    { name: "yahoo.com" },
    { name: "wikipedia.org" },
    { name: "zoom.us" },
    { name: "weibo.com" },
  ];
  // $http
  //   .get("https://jsonplaceholder.typicode.com/users", { cache: true })
  //   .then(function (response) {
  //     var apiData = response.data;
  //     $scope.websitesList = apiData;
  //     console.log(apiData);
  //     return apiData;
  //   });
  $scope.websitesSelected = [];

  $scope.activeWebsiteContinueButton = () => {
    if ($scope.websitesSelected.length == 0) {
      document
        .getElementById("websiteContinueButton")
        .removeAttribute("data-toggle");

      document
        .getElementById("collapseTwoAcordeon")
        .removeAttribute("data-toggle");
      alert("Please Select At Least 1 Website");
    } else {
      document
        .getElementById("websiteContinueButton")
        .setAttribute("data-toggle", "collapse");

      document
        .getElementById("collapseTwoAcordeon")
        .setAttribute("data-toggle", "collapse");
    }
  };

  //Services
  $scope.servicesSelect = {
    selectAll: "Select All",
    selectNone: "Unselect All",
    reset: "Undo all",
    search: "Select",
    nothingSelected: "Select", //default-label is deprecated and replaced with this.
  };
  $scope.servicesList = [{ name: "item1" }];
  $http
    .get("https://jsonplaceholder.typicode.com/users", { cache: true })
    .then(function (response) {
      var apiData = response.data;
      $scope.servicesList = apiData;
      console.log(apiData);
      return apiData;
    });
  $scope.servicesSelected = [];

  $scope.activeServiceContinueButton = () => {
    if ($scope.servicesSelected.length == 0) {
      document
        .getElementById("serviceContinueButton")
        .removeAttribute("data-toggle");

      document
        .getElementById("selectCitiesAcordeon")
        .removeAttribute("data-toggle");
      alert("Please Select At Least 1 Service");
    } else {
      document
        .getElementById("serviceContinueButton")
        .setAttribute("data-toggle", "collapse");

      document
        .getElementById("selectCitiesAcordeon")
        .setAttribute("data-toggle", "collapse");
    }
  };

  //City
  $scope.citiesList = [{ name: "item1" }];

  $http
    .get("https://jsonplaceholder.typicode.com/users", { cache: true })
    .then(function (response) {
      var apiData = response.data;
      $scope.citiesList = apiData;
      console.log(apiData);
      return apiData;
    });

  $scope.citiesSelected = [];

  $scope.activeCitiesContinueButton = () => {
    if ($scope.citiesSelected.length == 0) {
      document
        .getElementById("citiesContinueButton")
        .removeAttribute("data-target");
      alert("Please Select At Least 1 City");
    } else {
      document
        .getElementById("citiesContinueButton")
        .setAttribute("data-target", "#exampleModal");
    }
  };
  //$scope.groupArray = [
  //    {
  //        groupName:"blah1",
  //        suites:[{
  //            name:"suite1"
  //        },{
  //            name:"suite2"
  //        }]
  //    }
  //]
});

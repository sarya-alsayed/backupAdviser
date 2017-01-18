angular.module('adviser.addJordanCms', [])

.controller('addJordanCmsController', function ($scope, Jordan) {
  // Your code here

  $scope.place={};
  $scope.photos=[];
  
  $scope.addJordan= function (){
    $scope.place.description = $scope.tinymceModel;
    $scope.place.mainPhoto = $scope.mainfile;
    $scope.place.mapPhoto = $scope.mapfile;
    Jordan.addJordanInfo($scope.place)
    .then(function (place){
      alert("jordan is created");
    })
    .catch(function (error){
      alert("an error eccured");
    })
  }

$scope.uploadMain= function(file){
    Jordan.uploadPicture(file)
    .then(function(resp){
      if(resp.data.error_code===0){
        $scope.mainfile= '../../uploads/'+resp.data.file.filename;
      }else{
        $window.alert('An error occured!!!')
      }
    },function (resp) { //catch error
      $window.alert('Error status: ' + resp.status);
        });
  };

  $scope.submitMain= function(){
    if($scope.mainfile){
      $scope.uploadMain($scope.mainfile);
    }
  };

  $scope.uploadMap= function(file){
    Jordan.uploadPicture(file)
    .then(function(resp){
      if(resp.data.error_code===0){
        $scope.mapfile= '../../uploads/'+resp.data.file.filename;
      }else{
        $window.alert('An error occured!!!')
      }
    },function (resp) { //catch error
      $window.alert('Error status: ' + resp.status);
        });
  };

  $scope.submitMap= function(){
    if($scope.mapfile){
      $scope.uploadMap($scope.mapfile);
    }
  };
  

  $scope.tinymceOptions = {
   height: 400,
  plugins: [
    "advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
    "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
    "table contextmenu directionality emoticons template textcolor paste textcolor colorpicker textpattern"
  ],

  toolbar1: "newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect",
  toolbar2: "cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor image media code | insertdatetime preview | forecolor backcolor | table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | spellchecker | visualchars visualblocks nonbreaking template pagebreak restoredraft",

  menubar: false,
  toolbar_items_size: 'small',

  style_formats: [{
    title: 'Bold text',
    inline: 'b'
  }, {
    title: 'Red text',
    inline: 'span',
    styles: {
      color: '#ff0000'
    }
  }, {
    title: 'Red header',
    block: 'h1',
    styles: {
      color: '#ff0000'
    }
  }, {
    title: 'Example 1',
    inline: 'span',
    classes: 'example1'
  }, {
    title: 'Example 2',
    inline: 'span',
    classes: 'example2'
  }, {
    title: 'Table styles'
  }, {
    title: 'Table row 1',
    selector: 'tr',
    classes: 'tablerow1'
  }]
};
 

  
  });

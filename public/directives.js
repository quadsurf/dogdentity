


// dogdentityApp.directive('', ['$', function ($) {
//     return {
//         restrict: 'A'
//     };
// }]);


// <div ng-app="MyApp">
//   <div ng-controller="AppCtrl">
//     <div jq-slider model="sliderValue" min="25" max="75" step="5"></div>
//     <p>The slider's value is: <input ng-model="sliderValue"/></p>
//   </div>
// </div>


// app.controller('AppCtrl', ['$scope', function($scope) {
//   $scope.sliderValue = 50;
// }]);


dogdentityApp.directive('jqUploader', ['formService', function(formService) {
  return {
    restrict: 'E',
    scope: {
      // 'model': '='
      fileInput: '='
    },
    link: function(scope, elem, attrs) {


      function query_api(file, contents)
      {
          var data = new FormData();
          data.append('image_buf', file);
          $.ajax({
              url: 'http://54.205.134.57:5000/v0.0.1/predict',
              data: data,
              cache: false,
              contentType: false,
              processData: false,
              type: 'POST',
              success: function(response_object) {
                  console.log(response_object);
                  formService.dogResult = response_object;
                  console.log(formService.dogResult);
                  // var src = response_object.annotated_image;
                  // $('#annotated_image').attr('src', src);
              },
              error: function(xhr, textStatus, errorThrown) {
                  alert(xhr.responseText + "   " + textStatus + "  " + errorThrown);
              }
          });
      }

      // See: http://www.html5rocks.com/en/tutorials/file/dndfiles/

      function log_file_info(files)
      {
          for (var i = 0; i < files.length; i++)
          {
              var f = files[i];
              console.log(sprintf("%s: size:%d type:%s modified:%s",
                                  f.name, f.size, f.type,
                                  f.lastModifiedDate.toLocaleDateString()));
          }
      }

      function read_files(files)
      {
          for (var i = 0; i < files.length; i++)
          {
              var f = files[i];
              var reader = new FileReader();
              reader.onload = (function(f) {
                  return function(e) {
                      console.log(sprintf("Did read %s", f.name));
                      contents = e.target.result;
                      query_api(f, contents);
                  }
              })(f);
              reader.readAsArrayBuffer(f);
          }
      }

      $(function() {

          if (!window.File || !window.FileReader || !window.FileList || !window.Blob)
          {
              alert('The File APIs are not fully supported in this browser.');
          }

          $(window).on({
              dragover: function(e) {
                  e.stopPropagation();
                  e.preventDefault();
              },

              drop: function(e) {
                  e.stopPropagation();
                  e.preventDefault();
              }
          });

          drop_zone = $('#drop_zone')

          drop_zone.on({
              dragover: function(e) {
                  e.stopPropagation();
                  e.preventDefault();
                  drop_zone.addClass('drop_area_inner_selected');
              },

              dragleave: function(e) {
                  e.stopPropagation();
                  e.preventDefault();
                  drop_zone.removeClass('drop_area_inner_selected');
              },

              dragenter: function(e) {
                  e.stopPropagation();
                  e.preventDefault();
                  drop_zone.addClass('drop_area_inner_selected');
              },

              dragexit: function(e) {
                  e.stopPropagation();
                  e.preventDefault();
                  drop_zone.removeClass('drop_area_inner_selected');
              },

              drop: function(e) {
                  e.stopPropagation();
                  e.preventDefault();
                  drop_zone.removeClass('drop_area_inner_selected');

                  var files = e.originalEvent.dataTransfer.files; // FileList object
                  log_file_info(files);
                  read_files(files)
              }
          });

          $('#files').change(function(e) {
              var files = e.target.files;   // FileList object
              log_file_info(files);
              read_files(files);
              // console.log('change function');
              // console.log(files);
          });

      });



    }
  };
}]);

// $(elem).slider({
//   value: +scope.model,
//   min: +attrs.min,
//   max: +attrs.max,
//   step: +attrs.step,
//   slide: function(event, ui) {
//     $scope.apply(function() {
//       scope.model = ui.value;
//     });
//   }
// });
// scope.$watch('model', function(newVal) {
//   $slider.slider('value', newVal);
// });

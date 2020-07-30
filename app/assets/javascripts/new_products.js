
window.addEventListener("load", function(){
 
  $(function(){
    const buildFileField = (index_box, src)=>{
      // console.log(buildFileField);
      let html;
      let index = Math.min(...index_box);
      // console.log(index );
      if (index_box.length == 1) {
        // console.log("ok2" );
         html = `<div class='item-image'>
                  <div class=' item-image__content'>
                    <div class='item-image__content--icon'>
                      <img src=${src} width="114" height="80" >
                    </div>
                  </div>
                  <div class='item-image__operetion'>
                    <div class='item-image__operetion--delete' data-index="${index}">削除</div>
                  </div>
                </div>`
      }else{
        // console.log(index_box.length );
        html = `<div class='item-image'>
                  <div class=' item-image__content'>
                    <div class='item-image__content--icon'>
                      <img src=${src} width="114" height="80" >
                    </div>

                  </div>
                  <div class='item-image__operetion'>
                    <div class='item-image__operetion--delete' data-index="${index}">削除</div>
                  </div>
                </div>`
      }
      return html;
    }
    // ====================================================================
  
    let file_index = [0,1,2,3,4];

    $('#image-box-1').on('change', '.sell-upload-drop-file', (e)=>{
      let file = e.target.files[0]
      let file_url = window.URL.createObjectURL(file);
      if (file_index.length != 0){
        // $('#image-box__container').hide();
      $('#image-box__container').before(buildFileField(file_index, file_url))
      file_index.shift();
      let index = Math.min(...file_index);
        $('.new-listing__sell-upload-drop-box').prepend(`<input value="" class="sell-upload-drop-file" id="product_images_attributes_${index}_name" type="file" name="product[images_attributes][${index}][name]">
        <input data-index="${index}" type="checkbox" value="${index}" name="product[images_attributes][${index}][_destroy]" id="product_images_attributes_${index}__destroy" class="hidden-destroy" >`)
       
        $('.hidden-destroy').hide();

        console.log(file_index);
        // if (file_index == 5){ 
        //   $('#image-box__container').css('display', 'none')
        // }
      }

    })
    $('.hidden-destroy').hide();
// ===================================================================


    $('#image-box-1').on('click', '.item-image__operetion--delete', function(){
      let delete_image_id = parseInt($(this).attr('data-index') ) 
      // console.log(delete_image_id);
      file_index.push(delete_image_id);
      // console.log(file_index);
      file_index.sort();
      // console.log(file_index);

      const check_box = $(`#product_images_attributes_${delete_image_id}__destroy`)
      check_box.prop("checked", true)    
      // console.log("ok");

      if (file_index.length == 5) { 
        $('#image-box__container').show();
      }else if(file_index.length == 1){
        let html = `<input value="" class="sell-upload-drop-file" id="product_images_attributes_${delete_image_id}_name" type="file" name="product[images_attributes][${delete_image_id}][name]">`
        $('#image-box-1').append(html);
      }
      $(this).parent().parent().remove(); 
   
    })
  })
})


















































// $(function(){
//   var dataBox = new DataTransfer(); 
//   var file_field = document.querySelector('input[type=file]')

//   $('#img-file').change(function(){
//     // var files = $('input[type=file]').prop('files')[0];
//     $.each(this.files, function(i,file){
//     var fileReader = new FileReader();
 
//     dataBox.items.add(file) 
//     file_field.files =  dataBox.files 
//     console.log( dataBox.files);
//     var num = $('.item-image').length + 1 + i 
//     // console.log(num);
//     fileReader.readAsDataURL(file); 
        

//      if (num == 5){ 
//       $('#image-box__container').css('display', 'none')
//      }
//     fileReader.onloadend = function() {
//       var src = fileReader.result
//       var html = `<div class='item-image' data-index="${num}" data-image="${file.name}">
//                     <div class=' item-image__content'>
//                       <div class='item-image__content--icon'>
//                         <img src=${src} width="150" height="90" >
//                       </div>
//                     </div>
//                     <div class='item-image__operetion'>
//                       <div class='item-image__operetion--delete'>削除</div>
//                     </div>
//                   </div>`
//       $('#image-box__container').before(html);
//       };
     
//      $('#image-box__container').attr('class', `item-num-${num}`)
//     });
//   });
// // =============================================================

//   // if (window.location.href.match(/\/products\/\d+\/edit/)){
//   //   var checked = document.querySelectorAll("#checkbox");
//   //     console.log(checked)
//   //   $(document).on("click", '.item-image__operetion--delete',[0] ,function(){
//   //     $("#checkbox").prop("checked", true);
//   //     })
//   //   }

// // =============================================================

//     $(document).on("click", '.item-image__operetion--delete', function(){
//       var target_image = $(this).parent().parent()[0]
//       // let target_index = $(this).parent().data("index")
//       var target_name = $(target_image).data('image')
//       if(file_field.files.length==1){
       
//         $('input[type=file]').val(null)
//         // console.log("ok");
//         dataBox.clearData();
//       }else{
//         // console.log("ok");
//         $.each(file_field.files, function(i,input){
          
//           if(input.name==target_name){
//             dataBox.items.remove(i) 
//           }
//         })
//         file_field.files = dataBox.files
//       }
//       //  console.log("ok");
//       target_image.remove();
//       const check_box = $(`#product_images_attributes_${target_index}__destroy`)
//       check_box.prop("checked", true)
//       $(`product[images_attributes][${target_index}][name]`).remove()
     
//       var num = $('.item-image').length
//       $('#image-box__container').show()
//       $('#image-box__container').attr('class', `item-num-${num}`)
//     })
// });

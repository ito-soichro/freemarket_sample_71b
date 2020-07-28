window.addEventListener("load", function(){
$(function() {

  // 画像用のinputを生成する関数
  const buildFileField = (index, src)=>{
    // console.log(buildFileField);
    let html;
    // console.log(index_box)
    // console.log(index);
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
    
    return html;
  }
  // 追加==============================================================================================
  // let file_index = [0,1,2,3,4];
  $('#image-box-2').on('change', '.js-file', function(e) {
    let file = e.target.files[0]
      
    let file_url = window.URL.createObjectURL(file);
    let num = $(".js-file").length;
   
    let maxIndex = 0
      for (const fixIndex of document.querySelectorAll('.fix_index')){
        const dataIndex = parseInt(fixIndex.getAttribute('data-index')) ;
        maxIndex = Math.max(maxIndex, dataIndex)
      }
      const nextIndex = maxIndex + 1 
      // $('#image-box__container').hide();
      $('.item-image__content--icon').append(buildFileField(nextIndex, file_url))
      let test = $('.new-listing__sell-upload-drop-box').children().length;
      console.log(test);

    if (num < 5){
      
     
      $('.new-listing__sell-upload-drop-box').prepend(`<input class="js-file" type="file" name="product[images_attributes][${nextIndex}][name]" id="product_images_attributes_${nextIndex}_name">
      <input class="fix_index" data-index="${nextIndex}" type="checkbox" value="${nextIndex}" name="product[images_attributes][${nextIndex}][_destroy]" id="product_images_attributes_${nextIndex}__destroy">`)
     
    }

  });
  //削除 ===========================================================================
  $('#image-box-2').on('click', '.js-remove', function() {
    const targetIndex = $(this).parent().data('index');
    // 該当indexを振られているチェックボックスを取得する]
    // let delete_image_id = parseInt($(this).attr('data-index') ) 
    const hiddenCheck = $(`input[data-index="${targetIndex}"].hidden-destroy`);
    // もしチェックボックスが存在すればチェックを入れる
    if (hiddenCheck) hiddenCheck.prop('checked', true);

    // const check_box = $(`#product_images_attributes_${delete_image_id}__destroy`)
    // check_box.prop("checked", true)    
    // console.log("ok");

    $(this).parent().remove();
    $(`img[data-index="${targetIndex}"]`).remove();

    // 1,画像が削除された際にfile_indexから最小値を削除する（０を削除して[1,2,3,4]）
    if($(this).parent().remove())
      
    // ２、file_index内の最大の値に＋1した値をfile_indexに追加する（５を追加して[1,2,3,4,5]）

    // 画像入力欄が0個にならないようにしておく
    if ($('.js-file').length == 0) $('#image-box').append(buildFileField(fileIndex[0]));
  });
});
})
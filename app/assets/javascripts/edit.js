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
    $('#image-box-2').on('change', '.sell-upload-drop-file', function(e) {
      let file = e.target.files[0];
      let file_url = window.URL.createObjectURL(file);
      const data_index = $(this)[0].getAttribute('data-index');
      const img = $(`img[data-index="${data_index}"]`)[0];
      img.setAttribute("src", file_url);
      img.setAttribute("style", '');
      const check_box = $(`input[type="checkbox"][data-index="${data_index}"]`)[0];
      check_box.checked = false;
      let num = $(".sell-upload-drop-file").length;
      if (num < 5) {
        let maxIndex = 0;
        for (const fixIndex of document.querySelectorAll('.fix_index')){
          const dataIndex = parseInt(fixIndex.getAttribute('data-index'));
          maxIndex = Math.max(maxIndex, dataIndex);
        }
        const nextIndex = maxIndex + 1;
        $("#image-box-2").append(`
          <div class="item-box">
            <div class="item-image__content--icon">
              <img data-index="${nextIndex}" height="100" width="100" src="" style="display: none;">
            </div>
            <div class="js-file_group">
              <input class="js-file sell-upload-drop-file" data-index="${nextIndex}" type="file" name="product[images_attributes][${nextIndex}][name]" id="product_images_attributes_${nextIndex}_name">
            </div>
            <span class="js-remove" data-index="${nextIndex}">
              削除
            </span>
          </div>
          <input name="product[images_attributes][${nextIndex}][_destroy]" type="hidden" value="0">
          <input data-index="${nextIndex}" class="fix_index" type="checkbox" value="1" name="product[images_attributes][${nextIndex}][_destroy]" id="product_images_attributes_${nextIndex}__destroy" checked="checked">
        `);  
      }
    });
    /*
    $('#image-box-2').on('change', '.sell-upload-drop-file', function(e) {
      let file = e.target.files[0]
      let file_url = window.URL.createObjectURL(file);
      let num = $(".sell-upload-drop-file").length;
      let maxIndex = 0
        for (const fixIndex of document.querySelectorAll('.fix_index')){
          const dataIndex = parseInt(fixIndex.getAttribute('data-index')) ;
          maxIndex = Math.max(maxIndex, dataIndex)
        }
        const nextIndex = maxIndex + 1 
        console.log(nextIndex);
        $('#image-box__container').hide();
        $('.item-image__content--icon').before(buildFileField(nextIndex, file_url))
        let test = $('.new-listing__sell-upload-drop-box').children().length;
        console.log(test);
      if (num < 5){
        $('.new-listing__sell-upload-drop-box').prepend(`<input class="js-file" type="file" name="product[images_attributes][${nextIndex}][name]" id="product_images_attributes_${nextIndex}_name">
        <input class="fix_index" data-index="${nextIndex}" type="checkbox" style=" display: block; " value="${nextIndex}" name="product[images_attributes][${nextIndex}][_destroy]" id="product_images_attributes_${nextIndex}__destroy">`)
      }
    });
    */
    //削除 ===========================================================================
    $('#image-box-2').on('click', '.js-remove', function() {
      const data_index = $(this)[0].getAttribute('data-index');
      const img = $(`img[data-index="${data_index}"]`)[0];
      img.setAttribute("src", '');
      img.setAttribute("style", 'display: none;');
      const check_box = $(`input[type="checkbox"][data-index="${data_index}"]`)[0];
      check_box.checked = true;
    });
  });
  })
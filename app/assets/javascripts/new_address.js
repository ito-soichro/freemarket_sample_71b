window.addEventListener("load", function(){
  $(function(){
    // $( '#address_ship_family_name' ).on('click',function(){
    //   let address_ship_family_name = $(this).val();
    //   if(address_ship_family_name == 0){
    //     $('#address_ship_family_name').css('border-color','red')
    //     $('.add_address_ship_family_name').text('姓を入力してください')
    //   }else{
    //     $('#address_ship_family_name').css('border-color','')
    //     $('.add_address_ship_family_name').text('')
    //   }
    // });
    // $( '#address_ship_family_name' ).on('change',function(){
    //   let address_ship_family_name = $(this).val();
    //   if(address_ship_family_name == 0){
    //     $('#address_ship_family_name').css('border-color','red')
    //     $('.add_address_ship_family_name').text('姓を入力してください')
    //   }else{
    //     $('#address_ship_family_name').css('border-color','')
    //     $('.add_address_ship_family_name').text('')
    //   }
    // });


    // $( '#address_ship_first_name' ).on('click',function(){
    //   let address_ship_first_name = $(this).val();
    //   if(address_ship_first_name == 0){
    //     $('#address_ship_first_name').css('border-color','red')
    //     $('.add_address_ship_first_name').text('名を入力してください')
    //   }else{
    //     $('#address_ship_first_name').css('border-color','')
    //     $('.add_address_ship_first_name').text('')
    //   }
    // });
    // $( '#address_ship_first_name' ).on('change',function(){
    //   let address_ship_first_name = $(this).val();
    //   if(address_ship_first_name == 0){
    //     $('#address_ship_first_name').css('border-color','red')
    //     $('.add_address_ship_first_name').text('名を入力してください')
    //   }else{
    //     $('#address_ship_first_name').css('border-color','')
    //     $('.add_address_ship_first_name').text('')
    //   }
    // });


    // $( '#address_ship_family_name_kana' ).on('click',function(){
    //   let address_ship_family_name_kana = $(this).val();
    //   if(address_ship_family_name_kana == 0){
    //     $('#address_ship_family_name_kana').css('border-color','red')
    //     $('.add_address_ship_family_name_kana').text('姓カナを入力してください')
    //   }else{
    //     $('#address_ship_family_name_kana').css('border-color','')
    //     $('.add_address_ship_family_name_kana').text('')
    //   }
    // });
    // $( '#address_ship_family_name_kana' ).on('change',function(){
    //   let address_ship_family_name_kana = $(this).val();
    //   if(address_ship_family_name_kana == 0){
    //     $('#address_ship_family_name_kana').css('border-color','red')
    //     $('.add_address_ship_family_name_kana').text('姓カナを入力してください')
    //   }else{
    //     $('#address_ship_family_name_kana').css('border-color','')
    //     $('.add_address_ship_family_name_kana').text('')
    //   }
    // });


    // $( '#address_ship_first_name_kana' ).on('click',function(){
    //   let address_ship_first_name_kana = $(this).val();
    //   if(address_ship_first_name_kana == 0){
    //     $('#address_ship_first_name_kana').css('border-color','red')
    //     $('.add_address_ship_first_name_kana').text('名カナを入力してください')
    //   }else{
    //     $('#address_ship_first_name_kana').css('border-color','')
    //     $('.add_address_ship_first_name_kana').text('')
    //   }
    // });
    // $( '#address_ship_first_name_kana' ).on('change',function(){
    //   let address_ship_first_name_kana = $(this).val();
    //   if(address_ship_first_name_kana == 0){
    //     $('#address_ship_first_name_kana').css('border-color','red')
    //     $('.add_address_ship_first_name_kana').text('名カナを入力してください')
    //   }else{
    //     $('#address_ship_first_name_kana').css('border-color','')
    //     $('.add_address_ship_first_name_kana').text('')
    //   }
    // });


    $( '#address_post_number' ).on('click',function(){
      let address_post_number = $(this).val();
      if(address_post_number == 0){
        $('#address_post_number').css('border-color','red')
        $('.add_post_number').text('郵便番号を入力してください')
      }else{
        $('#address_post_number').css('border-color','')
        $('.add_post_number').text('')
      }
    });
    $( '#address_post_number' ).on('change',function(){
      let address_postal_code = $(this).val();
      if(address_postal_code == 0){
        $('#address_post_number').css('border-color','red')
        $('.add_post_number').text('郵便番号を入力してください')
      }else{
        $('#address_post_number').css('border-color','')
        $('.add_post_number').text('')
      }
    });


    $( '#address_city' ).on('click',function(){
      let address_city = $(this).val();
      if(address_city == 0){
        $('#address_city').css('border-color','red')
        $('.add_city').text('都道府県を選択してください')
      }else{
        $('#address_city').css('border-color','')
        $('.add_city').text('')
      }
    });
    $( '#address_city' ).on('change',function(){
      let address_city = $(this).val();
      if(address_city == 0){
        $('#address_city').css('border-color','red')
        $('.add_city').text('都道府県を選択してください')
      }else{
        $('#address_city').css('border-color','')
        $('.add_city').text('')
      }
    });


    $( '#address_block' ).on('click',function(){
      let address_block = $(this).val();
      if(address_block == 0){
        $('#address_block').css('border-color','red')
        $('.add_block').text('市区町村を入力してください')
      }else{
        $('#address_block').css('border-color','')
        $('.add_block').text('')
      }
    });
    $( '#address_block' ).on('change',function(){
      let address_block = $(this).val();
      if(address_block == 0){
        $('#address_block').css('border-color','red')
        $('.add_block').text('市区町村を入力してください')
      }else{
        $('#address_block').css('border-color','')
        $('.add_block').text('')
      }
    });


    $( '#address_address' ).on('click',function(){
      let address_address = $(this).val();
      if(address_address == 0){
        $('#address_address').css('border-color','red')
        $('.add_address').text('番地を入力してください')
      }else{
        $('#address_address').css('border-color','')
        $('.add_address').text('')
      }
    });
    $( '#address_address' ).on('change',function(){
      let address_address = $(this).val();
      if(address_address == 0){
        $('#address_address').css('border-color','red')
        $('.add_address').text('番地を入力してください')
      }else{
        $('#address_address').css('border-color','')
        $('.add_address').text('')
      }
    });
  });
});
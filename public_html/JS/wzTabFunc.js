/* global pageFunctions */
var WZTablePage = 0;
var WZTableOrder = 1;
var WZCount = 0;
var WZConPage = 0;
var WZConOrder = 1;
var WZConCount = 0;
var selectedContractorID = 0;

pageFunctions.wzTabFunc = (function(){
    var init = (function(){
        listeners();
        getWZDocuments();
    });
    
    var listeners = (function(){
        $('#confirmNewWZ').on('click', function(){
            addDocument();
        });
        $(document).on('click', function(e){
            var id = $(e.target).parent().attr('id');
            if(id!=undefined){
                if(id.substring(0,4) == 'WZID'){
                    $('.WZrow').removeClass('rowSelected');
                    $('#WZID'+id.substring(4,id.lenght)).addClass('rowSelected');
                }
            }
        });
        $(document).on('click', function(e){
        var id = $(e.target).parent().attr('id');
            if(id!=undefined){
                if(id.substring(0,5) == 'ConID'){
                    $('.WZConRow').removeClass('rowSelected');
                    $('#ConID'+id.substring(5,id.lenght)).addClass('rowSelected');
                    selectedContractorID = id.substring(5,id.lenght);
                }
            }
        });
        $(document).on('dblclick', function(e){
            var id = $(e.target).parent().attr('id');
            if(id!=undefined && id!='WZContainer'){
                if(id.substring(0,4) == 'WZID'){
                    alert("WZ o id" + id.substring(4,id.lenght));
                }
            }
        });
        $('#cancelNewWZ').on('click', function(){
            $('#WZContainer').removeClass('blur');
            $('#newWZpopup').addClass('hidden');
            $('#selectContractorId').val('');
            $('#selectContractorName').val('');
            $('#selectContractorCity').val('');
            $('#selectContractorNIP').val('');
        });
        $('#newWZ').on('click', function(){
            $('#WZContainer').addClass('blur');
            $('#newWZpopup').removeClass('hidden');
            getContractors();
        });
        $('#WZnext').on('click', function(){
            $('.WZrow').removeClass('rowSelected');
            WZTablePage++;
            getWZDocuments();
            if(WZTablePage>0){
                $('#WZprevious').removeClass('hidden');
            }
        });
        $('#WZprevious').on('click', function(){
            $('.WZrow').removeClass('rowSelected');
            WZTablePage--;
            getWZDocuments();
            if(WZTablePage==0){
                $('#WZprevious').addClass('hidden');
            }
        });
        
        $('#WZConNext').on('click', function(){
            $('.WZConRow').removeClass('rowSelected');
            WZConPage++;
            getContractors();
            if(WZConPage>0){
                $('#WZConPrevious').removeClass('hidden');
            }
            selectedContractorID = 0;
        });
        $('#WZConPrevious').on('click', function(){
            $('.WZConRow').removeClass('rowSelected');
            WZConPage--;
            getContractors();
            if(WZConPage==0){
                $('#WZConPrevious').addClass('hidden');
            }
            selectedContractorID = 0;
        });
        
        $(document).on('click', function(e){
            if(e.target.id =='newWZpopup'){
                $('#WZContainer').removeClass('blur');
                $('#newWZpopup').addClass('hidden');
                $('#selectContractorId').val('');
                $('#selectContractorName').val('');
                $('#selectContractorCity').val('');
                $('#selectContractorNIP').val('');
            }
        });
        
        //OPEN AND CLOSE WZtab
        $('#WZTabOpen').on('click', function(){
            $('.tab').addClass('hidden');
            $('.tab').removeClass('show');
            $('#WZContainer').removeClass('hidden');
            $('#WZContainer').addClass('show');
        });
        $('#closeWZContainer').on('click', function(){
            $('#WZContainer').addClass('hidden');
            $('#WZContainer').removeClass('show');
        });
        $('#WZsearch').on('click', function(){
            WZTablePage=0;
            getWZDocuments();
        });
        $('#WZConSearch').on('click', function(){
            WZConPage=0;
            getContractors();
        });
        $('#WZConReset').on('click', function(){
            conReset();
        });
        $('#WZreset').on('click', function(){
            reset();
        });
        //ORDER ARROWS CONTROL WZ TAB
        $('#WZarrUpId').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrUpId').addClass('used');
            $('#WZarrUpId').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 0;
            getWZDocuments();
        });
        $('#WZarrDownId').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrDownId').addClass('used');
            $('#WZarrDownId').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 1;
            getWZDocuments();
        });
        $('#WZarrUpNo').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrUpNo').addClass('used');
            $('#WZarrUpNo').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 2;
            getWZDocuments();
        });
        $('#WZarrDownNo').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrDownNo').addClass('used');
            $('#WZarrDownNo').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 3;
            getWZDocuments();
        });
        $('#WZarrUpDate').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrUpDate').addClass('used');
            $('#WZarrUpDate').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 4;
            getWZDocuments();
        });
        $('#WZarrDownDate').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrDownDate').addClass('used');
            $('#WZarrDownDate').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 5;
            getWZDocuments();
        });
        $('#WZarrUpAccDate').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrUpAccDate').addClass('used');
            $('#WZarrUpAccDate').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 6;
            getWZDocuments();
        });
        $('#WZarrDownAccDate').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrDownAccDate').addClass('used');
            $('#WZarrDownAccDate').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 7;
            getWZDocuments();
        });
        $('#WZarrUpConId').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrUpConId').addClass('used');
            $('#WZarrUpConId').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 8;
            getWZDocuments();
        });
        $('#WZarrDownConId').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrDownConId').addClass('used');
            $('#WZarrDownConId').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 9;
            getWZDocuments();
        });
        $('#WZarrUpConName').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrUpConName').addClass('used');
            $('#WZarrUpConName').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 10;
            getWZDocuments();
        });
        $('#WZarrDownConName').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrDownConName').addClass('used');
            $('#WZarrDownConName').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 11;
            getWZDocuments();
        });
        //ORDER ARROWS CONTROL CONTRACTORS TAB
        $('#WZConArrUpId').on('click', function(){
            WZTablePage = 0;
            $('.WZConArr').addClass('unused');
            $('.WZConArr').removeClass('used');
            $('#WZConArrUpId').addClass('used');
            $('#WZConArrUpId').removeClass('unused');
            $('#previous').addClass('hidden');
            WZConOrder = 0;
            getContractors();
        });
        $('#WZConArrDownId').on('click', function(){
            WZTablePage = 0;
            $('.WZConArr').addClass('unused');
            $('.WZConArr').removeClass('used');
            $('#WZConArrDownId').addClass('used');
            $('#WZConArrDownId').removeClass('unused');
            $('#previous').addClass('hidden');
            WZConOrder = 1;
            getContractors();
        });
        $('#WZConArrUpConName').on('click', function(){
            WZTablePage = 0;
            $('.WZConArr').addClass('unused');
            $('.WZConArr').removeClass('used');
            $('#WZConArrUpConName').addClass('used');
            $('#WZConArrUpConName').removeClass('unused');
            $('#previous').addClass('hidden');
            WZConOrder = 2;
            getContractors();
        });
        $('#WZConArrDownConName').on('click', function(){
            WZTablePage = 0;
            $('.WZConArr').addClass('unused');
            $('.WZConArr').removeClass('used');
            $('#WZConArrDownConName').addClass('used');
            $('#WZConArrDownConName').removeClass('unused');
            $('#previous').addClass('hidden');
            WZConOrder = 3;
            getContractors();
        });
        $('#WZConArrUpCity').on('click', function(){
            WZTablePage = 0;
            $('.WZConArr').addClass('unused');
            $('.WZConArr').removeClass('used');
            $('#WZConArrUpCity').addClass('used');
            $('#WZConArrUpCity').removeClass('unused');
            $('#previous').addClass('hidden');
            WZConOrder = 4;
            getContractors();
        });
        $('#WZConArrDownCity').on('click', function(){
            WZTablePage = 0;
            $('.WZConArr').addClass('unused');
            $('.WZConArr').removeClass('used');
            $('#WZConArrDownCity').addClass('used');
            $('#WZConArrDownCity').removeClass('unused');
            $('#previous').addClass('hidden');
            WZConOrder = 5;
            getContractors();
        });
        $('confirmNewWZ').on('click', function(){
            
        });
    });
    var reset = (function(){
            WZTableOrder=1;
            WZTablePage=0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZidBox').val('');
            $('#WZnoBox').val('');
            $('#WZconIdBox').val('');
            $('#WZconNameBox').val('');
            $('#previous').addClass('hidden');
            getWZDocuments();
    });
    var conReset = (function(){
            WZConOrder=1;
            WZConPage=0;
            $('.WZConArr').addClass('unused');
            $('.WZConArr').removeClass('used');
            $('#selectContractorId').val('');
            $('#selectContractorName').val('');
            $('#selectContractorCity').val('');
            $('#selectContractorNIP').val('');
            $('#WZConPrevious').addClass('hidden');
            getContractors();
    });
    var getWZCount = (function(){
        param = {};
        //DOCUMENT ID
        if($('#WZidBox').val() == ''){
            param['docId'] = 0;
        }else{
            param['docId'] = $('#WZidBox').val();
        }
        //CONTRACTOR ID
        if($('#WZconIdBox').val() == ''){
            param['conId'] = 0;
        }else{
            param['conId'] = $('#WZconIdBox').val();
        }
        //DOCUMENT NO
        if($('#WZnoBox').val() == ''){
            param['docNo'] = 0;
        }else{
            param['docNo'] = $('#WZnoBox').val();
        }
        param['docType'] = 1;
        param['conName'] = $("#WZconNameBox").val();
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getDocumentsCount.php',            
          success: function(data){
            WZCount = data[0].count;
          }
        });
    });
    var getWZDocuments = (function(){
        param = {};       
        //DOCUMENT ID
        if($('#WZidBox').val() == ''){
            param['docId'] = 0;
        }else{
            param['docId'] = $('#WZidBox').val();
        }
        //CONTRACTOR ID
        if($('#WZconIdBox').val() == ''){
            param['conId'] = 0;
        }else{
            param['conId'] = $('#WZconIdBox').val();
        }
        //DOCUMENT NO
        if($('#WZnoBox').val() == ''){
            param['docNo'] = 0;
        }else{
            param['docNo'] = $('#WZnoBox').val();
        }
        param['docType'] = 1;
        param['conName'] = $("#WZconNameBox").val();
        param['ord'] = WZTableOrder;
        param['page'] = WZTablePage;
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getDocuments.php',            
          success: function(data){
              getWZCount();
              $('#WZTabContent').html(createWZTableContent(data));
              if(WZCount<=15){
                  $('#WZnext').addClass('hidden');
              } else {
                  $('#WZnext').removeClass('hidden');
              }
              if(WZCount<(WZTablePage*15+15)){
                  $('#WZnext').addClass('hidden');
              } else {
                  $('#WZnext').removeClass('hidden');
              }
          }
        });
    });
    var dateToFormat = (function(date){
        var formDate;
        var year;
        var month;
        var day;
        var hours;
        var minutes;
        var seconds;
        
        year = date.getYear()+1900;
        month = date.getMonth()+1;
        if(month<=9){month = '0'+month;}
        day = date.getDate();
        if(day<=9){day = '0'+day;}
        hours = date.getHours();
        if(hours<=9){hours = '0'+hours;}
        minutes = date.getMinutes();
        if(minutes<=9){minutes = '0'+minutes;}
        seconds = date.getSeconds();
        if(seconds<=9){seconds = '0'+seconds;}
        
        
        formDate = year+'.'+month+'.'+day+' '+hours+':'+minutes+':'+seconds;
        return formDate;
    });
    
    var addDocument = (function(){
        param = {};       
        //DOCUMENT ID
        if(selectedContractorID == 0){
            alert('Nie wybrano kontrahenta');
        }else{
            param['docType'] = 1;
            var dateNow = new Date();
            var stamp = dateNow.getTime();
            param['docDate'] = stamp;
            param['docCon'] = selectedContractorID;
            param['docYear'] = dateNow.getYear()+1900;
            param['docCreator'] = window.sessionStorage.getItem('id');
            $.ajax({
              type: 'POST',
              async: false,
              data: param,
              dataType: 'json',
              url: 'PHP/addDocument.php',            
              success: function(){
                reset();
              }
            });
            $('#WZContainer').removeClass('blur');
            $('#newWZpopup').addClass('hidden');
            $('#selectContractorId').val('');
            $('#selectContractorName').val('');
            $('#selectContractorCity').val('');
            $('#selectContractorNIP').val('');
        }
    });
    
    var createWZTableContent = (function(data){
        ans = '';
        var tmpDate;
        var tmpAccDate;
        $.each(data,function(index, value){
            
            tmpDate = new Date(parseInt(value['document_date']));
            tmpDate = dateToFormat(tmpDate);
            if(value['document_accept_date'] != 0){
                tmpAccDate = new Date(parseInt(value['document_accept_date']));
                tmpAccDate = dateToFormat(tmpAccDate);
            } else {
                tmpAccDate = "nie zatwierdzony";
            }
            ans += "<tr class='WZrow' id=WZID"+value['document_id']+"><td class='WZcol1b'>"+value['document_id']+"</td><td class='WZcol2b'>"+value['document_number']+"</td><td class='WZcol3b'>"+value['document_year']+"</td><td class='WZcol4b'>"+value['document_contractor_id']+"</td><td class='WZcol5b'>"+value['contractor_name']+"</td><td class='WZcol6b'>"+value['document_type_short']+"</td><td class='WZcol7b'>"+tmpDate+"</td><td class='WZcol8b'>"+tmpAccDate+"</td><td class='WZcol9b'>"+value['user_fname']+' '+value['user_lname']+"</td></tr>";
        });    
        return ans;
    });
    var createWZConTableContent = (function(data){
        ans = '';
        $.each(data,function(index, value){
            ans += "<tr class='WZConRow' id=ConID"+value['contractor_id']+"><td class='WZConCol1c'>"+value['contractor_id']+"</td><td class='WZConCol2c'>"+value['contractor_name']+"</td><td class='WZConCol3c'>"+value['contractor_nip']+"</td><td class='WZConCol4c'>"+value['contractor_postal']+"</td><td class='WZConCol5c'>"+value['contractor_city']+"</td><td class='WZConCol6c'>"+value['contractor_street']+"</td><td class='WZConCol7c'>"+value['contractor_tel']+"</td><td class='WZConCol8c'>"+value['contractor_email']+"</td></tr>";
        });    
        return ans;
    });
    var getContractorsCount = (function(){
        param = {};
        //Contractor ID
        if($('#selectContractorId').val() == ''){
            param['id'] = 0;
        }else{
            param['id'] = $('#selectContractorId').val();
        }
        param['conName'] = $("#selectContractorName").val();
        param['conCity'] = $("#selectContractorCity").val();
        param['conNIP'] = $("#selectContractorNIP").val();
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getContractorsCount.php',            
          success: function(data){
            WZConCount = data[0].count;
          }
        });
    });
    var getContractors = (function(){
        param = {};       
        selectedContractorID = 0;
        //Contractor ID
        if($('#selectContractorId').val() == ''){
            param['id'] = 0;
        }else{
            param['id'] = $('#selectContractorId').val();
        }
        param['conName'] = $("#selectContractorName").val();
        param['conCity'] = $("#selectContractorCity").val();
        param['conNIP'] = $("#selectContractorNIP").val();
        
        param['ord'] = WZConOrder;
        param['pageNo'] = WZConPage;
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getContractors.php',            
          success: function(data){
              getContractorsCount();
              $('#WZConTabContent').html(createWZConTableContent(data));
              if(WZConCount<=5){
                  $('#WZConNext').addClass('hidden');
              } else {
                  $('#WZConNext').removeClass('hidden');
              }
              if(WZConCount<(WZConPage*5+5)){
                  $('#WZConNext').addClass('hidden');
              } else {
                  $('#WZConNext').removeClass('hidden');
              }
          }
        });
    });
    $(document).ready(function(){
        init(); 
    });
}());
 
/**
 * Created by Marek on 2017-04-23.
 */
pageFunctions.languages = (function(){
    var init = (function(){
        listeners();
    });
    var listeners = (function(){
        $('#english').on('click', function () {
            english();
            $('.languageTrigger').html('EN');
        });

        $('#polish').on('click', function () {
            polish();
            $('.languageTrigger').html('PL');
        });
    });

    var english = function () {
        $('#bs-example-navbar-collapse-1').removeClass('in');
        $('#documentsLang').html('Documents');
        $('#productsLang').html('Products');
        $('#contractorsLang').html('Contractors');
        $('#reportsLang').html('Reports');
        $('#userLang').html('User');
        $('#shippingNotesLang').html('Shipping Notes');
        $('#invoicesLang').html('Invoices');
        $('#deliveryNotesLang').html('Delivery Notes');
        $('#addProductLang').html('Add product');
        $('#editProductLang').html('Edit product');
        $('#productCatalogLang').html('Catalog');
        $('#withdrawLang').html('Withdraw product');
        $('#changePriceLang').html('Change price');
        $('#contractorListLang').html('Contractors list');
        $('#contractorAddLang').html('Add contractor');
        $('#contractorEditLang').html('Edit contractor');
        $('#productSalesLang').html('Product sales');
        $('#groupSalesLang').html('Group sales');
        $('#changePasswordLang').html('Change password');
        $('#userLogoutLang').html('Logout');
        $('.prodIdLang').html('Product ID:');
        $('.contractorIdLang').html('Contractor ID:');
        $('#prodNameLang').html('Name:');
        $('#priceMinLang').html('Price Min:');
        $('#priceMaxLang').html('Price Max:');
        $('#qtyMinLang').html('Qty Min:');
        $('#qtyMaxLang').html('Qty Max:');
        $('.prodNameHeaderLang').html('Name');
        $('.prodProducerHeaderLang').html('Producer');
        $('.prodQtyHeaderLang').html('Qty');
        $('.prodPriceHeaderLang').html('Price');
        $('.prodTaxHeaderLang').html('Tax[%]');
        $('.prodGroupHeaderLang').html('Group');
        $('.prodUnitHeaderLang').html('Unit');
        $('.prodDiscountHeaderLang').html('Discount[%]');
        $('.prodNetHeaderLang').html('Price net');
        $('.prodGrossHeaderLang').html('Price gross');
        $('.prodValNetHeaderLang').html('Value net');
        $('.prodValGrossHeaderLang').html('Value gross');
        $('.prodWithDiscountHeaderLang').html('With discount');
        $('.search').attr('value','Search');
        $('#PRprevious').attr('value', 'Previous');
        $('#PRnext').attr('value', 'Next');
        $('#WZprevious').attr('value', 'Previous');
        $('#WZnext').attr('value', 'Next');
        $('#FVprevious').attr('value', 'Previous');
        $('#FVnext').attr('value', 'Next');
        $('#FVConPrevious').attr('value', 'Previous');
        $('#FVConNext').attr('value', 'Next');
        $('#WZConPrevious').attr('value', 'Previous');
        $('#WZConNext').attr('value', 'Next');
        $('.closeBtt').attr('value','Close');
        $('#changeImageProductPopup').attr('value','Change image');
        $('.documentIdLang').html('Document ID:');
        $('.documentNoLang').html('Document Number:');
        $('.printDocumentBttLang').attr('value', 'Print');
        $('.contrIdLang').html('Contractor ID:');
        $('.contrNameLang').html('Contractor name:');
        $('#newWZ').attr('value','New shipping note');
        $('#newFV').attr('value','New invoice');
        $('#newPZ').attr('value','New delivery note');
        $('.acceptDoc').attr('value','Accept selected document');
        $('.delDoc').attr('value','Delete selected document');
        $('.docNoHeaderLang').html('No');
        $('.docYearHeaderLang').html('Year');
        $('.docConIdHeaderLang').html('Contr. ID');
        $('.docConNameHeaderLang').html('Contractor');
        $('.docTypeHeaderLang').html('Type');
        $('.docDateHeaderLang').html('Date');
        $('.docAcceptedHeaderLang').html('Accepted');
        $('.docCreatorHeaderLang').html('Creator');
        $('.contractorChooseLang').html('Choose contractor');
        $('.contractorNameLang').html('Name:');
        $('.contractorCityLang').html('City:');
        $('.contractorTaxNoLang').html('UTR:');
        $('.docConConHeader').html('Name');
        $('.docConTaxNoHeader').html('UTR');
        $('.docConPostCodeHeader').html('Code');
        $('.docConCityHeader').html('City');
        $('.docConStreetHeader').html('Street/No');
        $('.docConPhoneHeader').html('Phone');
        $('.cancel').html('Cancel');
        $('.create').html('Create');
        $('.addingPosition').html('Adding position');
        $('.editPosition').html('Editing position');
        $('.shippingNoteLang').html('Shipping note');
        $('.deliveryNoteLang').html('Delivery note');
        $('.invoiceLang').html('Invoice');
        $('.contractorLang').html('Contractor:');
        $('.gross').html('GROSS: ');
        $('.net').html('NET: ');
        $('.productDetailsAddLang').attr('placeholder', "PRODUCT CODE/NAME/BARCODE");
        $('.addPositionBttLang').attr('value','Add position');
        $('.delPositionBttLang').attr('value','Delete selected position');
        $('.editPositionBttLang').attr('value','Edit selected position');
        $('.addProductLang').html('Add product');
<<<<<<< HEAD
        $('.addNewProductLang').attr('value','Save product');
        $('.newProdNameLang').html('Name: ');
        $('.newProdPriceLang').html('Price gross: ');
=======
        $('.addNewProductLang').attr('value','Add product');
        $('.newProdNameLang').html('Name: ');
        $('.newProdPriceLang').html('Price net: ');
>>>>>>> editPosition
        $('.newProdGroupLang').html('Group: ');
        $('.newProdVatLang').html('Tax: ');
        $('.newProdUnitLang').html('Unit: ');
        $('.newProdProducerLang').html('Producer: ');
        $('.newProdCodeLang').html('Bar code: ');
<<<<<<< HEAD
        $('.editProductLang').html('Edit product');
        $('.editProductLang').attr('value','Save product');
        $('.findLang').attr('value','Find');
        $('.changePassword').html('Change password');
        $('.oldPasswordLang').html('Old password:');
        $('.newPasswordLang').html('New password');
        $('.repPasswordLang').html('Repeat password');
        $('#acceptChangePassword').attr('value','Change password');
        $('.changePasswordLang').html('Change password');
        $('.priceHistLang').attr('value', 'Price history');
        $('.priceHistLangNavbar').html('Price history');
        $('.priceHistoryPriceLang').html('New price net');
        $('.priceHistoryDateLang').html('Change date');
        $('.sellChartLang').attr('value', 'Sales graph');
        $('#redrawChart').attr('value', 'Redraw graph');
        $('.dataFromYearLang').html('Data from year:');
        $('#allSalesLang').html('Sales grahp');
        $('.addContractor').html('Add contractor');
        $('.contractorNameLang').html('Name:');
        $('.contractorStreetLang').html('Street:');
        $('.contractorPostalCodeLang').html('Postal code:');
        $('.contractorCityLang').html('City:');
        $('.contractorNipLang').html('UTR:');
        $('.addContractorLang').html('Add contractor');
        $('.editContractorLang').html('Edit contractor');
        $('.addContractorLang').attr('value','Add contractor');
        $('.editContractorLang').attr('value','Edit contractor');
        $('.contractorPhoneLang').html('Phone No:');
        $('.contractorEmailLang').html('E-mail:');
        $('.contractorIsProviderLang').html('Is provider?:');
        $('.isProviderNoLang').html('Is not provider');
        $('.isProviderYesLang').html('Is provider');
        $('.contractorsListLang').html('Contractors list');

=======
>>>>>>> editPosition
        window.localStorage.setItem('lang','en');
    }
    var polish = function(){
        $('#bs-example-navbar-collapse-1').removeClass('in');
        $('#documentsLang').html('Dokumenty');
        $('#productsLang').html('Produkty');
        $('#contractorsLang').html('Kontrahenci');
        $('#reportsLang').html('Raporty');
        $('#userLang').html('Użytkownik');
        $('#shippingNotesLang').html('Wydania zewnętrzne');
        $('#invoicesLang').html('Faktury');
        $('#deliveryNotesLang').html('Przyjęcie zewnętrzne');
        $('#addProductLang').html('Dodaj produkt');
        $('#editProductLang').html('Edytuj produkt');
        $('#productCatalogLang').html('Katalog');
        $('#withdrawLang').html('Wycofaj produkt');
        $('#changePriceLang').html('Zmień cenę');
        $('#contractorListLang').html('Lista kontrahentów');
        $('#contractorAddLang').html('Dodaj kontrahenta');
        $('#contractorEditLang').html('Edytuj kontrahenta');
        $('#productSalesLang').html('Sprzedaż produktu');
        $('#groupSalesLang').html('Sprzedaż w grupie');
        $('#changePasswordLang').html('Zmień hasło');
        $('#userLogoutLang').html('Wyloguj');
        $('.prodIdLang').html('ID produktu:');
        $('.contractorIdLang').html('ID kontrahenta:');
        $('#prodNameLang').html('Nazwa:');
        $('#priceMinLang').html('Cena Min:');
        $('#priceMaxLang').html('Cena Max:');
        $('#qtyMinLang').html('Ilość Min:');
        $('#qtyMaxLang').html('Ilość Max:');
        $('.prodNameHeaderLang').html('Nazwa');
        $('.prodProducerHeaderLang').html('Producent');
        $('.prodQtyHeaderLang').html('Ilość');
        $('.prodPriceHeaderLang').html('Cena');
        $('.prodTaxHeaderLang').html('Vat[%]');
        $('.prodGroupHeaderLang').html('Grupa');
        $('.prodUnitHeaderLang').html('Jedn.');
        $('.prodDiscountHeaderLang').html('Rabat[%]');
        $('.prodNetHeaderLang').html('Cena netto');
        $('.prodGrossHeaderLang').html('Cena brutto');
        $('.prodValNetHeaderLang').html('Wartość netto');
        $('.prodValGrossHeaderLang').html('Wartość brutto');
        $('.prodWithDiscountHeaderLang').html('Z rabatem');
        $('.search').attr('value','Szukaj');
        $('#PRprevious').attr('value', 'Poprzednia');
        $('#PRnext').attr('value', 'Następna');
        $('#WZprevious').attr('value', 'Poprzednia');
        $('#WZnext').attr('value', 'Następna');
        $('#FVprevious').attr('value', 'Poprzednia');
        $('#FVnext').attr('value', 'Następna');
        $('#FVConPrevious').attr('value', 'Poprzednia');
        $('#FVConNext').attr('value', 'Następna');
        $('#WZConPrevious').attr('value', 'Poprzednia');
        $('#WZConNext').attr('value', 'Następna');
        $('.closeBtt').attr('value','Zamknij');
        $('#changeImageProductPopup').attr('value','Zmień obraz');
        $('.documentIdLang').html('ID dokumentu:');
        $('.documentNoLang').html('Numer dokumentu:');
        $('.printDocumentBttLang').attr('value', 'Drukuj');
        $('.contrIdLang').html('ID kontrahenta:');
        $('.contrNameLang').html('Nazwa kontrahenta:');
        $('#newWZ').attr('value','Nowy dokument WZ');
        $('#newFV').attr('value','Nowa faktura');
        $('#newPZ').attr('value','Nowy dokument PZ');
        $('.acceptDoc').attr('value','Potwierdź zaznaczony dokument');
        $('.delDoc').attr('value','Usuń zaznaczony dokument');
        $('.docNoHeaderLang').html('Nr');
        $('.docYearHeaderLang').html('Rok');
        $('.docConIdHeaderLang').html('ID Kontr.');
        $('.docConNameHeaderLang').html('Kontrahent');
        $('.docTypeHeaderLang').html('Typ');
        $('.docDateHeaderLang').html('Data');
        $('.docAcceptedHeaderLang').html('Zaakceptowano');
        $('.docCreatorHeaderLang').html('Utworzył');
        $('.contractorChooseLang').html('Wybór kontrahenta');
        $('.contractorNameLang').html('Nazwa:');
        $('.contractorCityLang').html('Miasto:');
        $('.contractorTaxNoLang').html('NIP:');
        $('.docConConHeader').html('Nazwa');
        $('.docConTaxNoHeader').html('NIP');
        $('.docConPostCodeHeader').html('Kod');
        $('.docConCityHeader').html('Miasto');
        $('.docConStreetHeader').html('Ulica/Nr');
        $('.docConPhoneHeader').html('Telefon');
        $('.cancel').html('Anuluj');
        $('.create').html('Utwórz');
        $('.addingPosition').html('Dodawanie pozycji');
        $('.editPosition').html('Edytowanie pozycji');
        $('.shippingNoteLang').html('Dokument WZ');
        $('.deliveryNoteLang').html('Dokument PZ');
        $('.invoiceLang').html('Faktura VAT');
        $('.contractorLang').html('Nabywca:');
        $('.gross').html('BRUTTO: ');
        $('.net').html('NETTO: ');
        $('.productDetailsAddLang').attr('placeholder', "KOD TOWARU/NAZWA/KOD KRESKOWY");
        $('.addPositionBttLang').attr('value','Dodaj pozycje');
        $('.delPositionBttLang').attr('value','Usuń zaznaczoną pozycję');
        $('.editPositionBttLang').attr('value','Edytuj zaznaczoną pozycję');
        $('.addProductLang').html('Dodaj produkt');
<<<<<<< HEAD
        $('.addNewProductLang').attr('value','Zapisz produkt');
        $('.newProdNameLang').html('Nazwa: ');
        $('.newProdPriceLang').html('Cena brutto: ');
=======
        $('.addNewProductLang').attr('value','Dodaj produkt');
        $('.newProdNameLang').html('Nazwa: ');
        $('.newProdPriceLang').html('Cena netto: ');
>>>>>>> editPosition
        $('.newProdGroupLang').html('Grupa: ');
        $('.newProdVatLang').html('Vat: ');
        $('.newProdUnitLang').html('Jednostka: ');
        $('.newProdProducerLang').html('Producent: ');
        $('.newProdCodeLang').html('Kod kreskowy: ');
<<<<<<< HEAD
        $('.editProductLang').html('Edytuj produkt');
        $('.editProductLang').attr('value','Zapisz produkt');
        $('.findLang').attr('value','Szukaj');
        $('.changePassword').html('Zmiana hasła');
        $('.oldPasswordLang').html('Stare hasło:');
        $('.newPasswordLang').html('Nowe hasło');
        $('.repPasswordLang').html('Powtórz hasło');
        $('#acceptChangePassword').attr('value','Zmień hasło');
        $('.changePasswordLang').html('Zmień hasło');
        $('.priceHistLang').attr('value', 'Historia ceny');
        $('.priceHistLangNavbar').html('Historia ceny');
        $('.priceHistoryPriceLang').html('Nowa cena netto');
        $('.priceHistoryDateLang').html('Data zmiany');
        $('.sellChartLang').attr('value', 'Wykres sprzedaży');
        $('#redrawChart').attr('value', 'Odśwież wykres');
        $('.dataFromYearLang').html('Dane z roku:');
        $('#allSalesLang').html('Wykres sprzedaży');
        $('.addContractor').html('Dodaj kontrahenta');
        $('.contractorNameLang').html('Nazwa:');
        $('.contractorStreetLang').html('Ulica:');
        $('.contractorPostalCodeLang').html('Kod pocztowy:');
        $('.contractorCityLang').html('Miasto:');
        $('.contractorNipLang').html('NIP:');
        $('.addContractorLang').html('Dodaj kontrahenta');
        $('.editContractorLang').html('Edytuj kontrahenta');
        $('.addContractorLang').attr('value','Dodaj kontrahenta');
        $('.editContractorLang').attr('value','Edytuj kontrahenta');
        $('.contractorPhoneLang').html('Telefon:');
        $('.contractorEmailLang').html('E-mail:');
        $('.contractorIsProviderLang').html('Jest dostawcą?:');
        $('.isProviderNoLang').html('Nie jest dostawcą');
        $('.isProviderYesLang').html('Jest dostawcą');
        $('.contractorsListLang').html('Lista kontrahentów');
=======
>>>>>>> editPosition
        window.localStorage.setItem('lang','pl');
    }

    $(document).ready(function(){
        if(window.localStorage.getItem('lang')=='en'){
            $('.languageTrigger').html('EN');
            english();
        } else if(window.localStorage.getItem('lang')=='pl') {
            $('.languageTrigger').html('PL');
            polish();
        } else {
            $('.languageTrigger').html('PL');
            polish();
        }
        init();
    });
})();
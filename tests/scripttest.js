/**
 * @author grrao
 */

module("Omni Box");

asyncTest('Category Retrieval for PIN1',1, function() { 
  $.getJSON("http://genewikiplus.org/api.php?action=ask&q=[[PIN1]]&format=json&callback=?", function(data) {
var result = find_category("PIN1",data);
equal(result, "gene", "Result should be Human_proteins");
});
      setTimeout(function() { 
                start(); 
        }, 7000) 

});

asyncTest('Category Retrieval for CDK2',1, function() { 
  $.getJSON("http://genewikiplus.org/api.php?action=ask&q=[[CDK2]]&format=json&callback=?", function(data) {
var result = find_category("CDK2",data);
equal(result, "error", "Result should be Human_proteins");
});
      setTimeout(function() { 
                start(); 
        }, 7000) 

}); 	
	
asyncTest('Category Retrieval for BRCA2',1, function() { 
  $.getJSON("http://genewikiplus.org/api.php?action=ask&q=[[CDK2]]&format=json&callback=?", function(data) {
var result = find_category("BRCA2",data);
equal(result, "gene", "Result should be Human_proteins");
});
      setTimeout(function() { 
                start(); 
        }, 7000) 

}); 	



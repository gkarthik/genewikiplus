/**
 * @author grrao
 */

module("Omni Box");

asyncTest('Category Retrieval for CDK2',1, function() { 
  var result=get_data("CDK2");
  equal(result, true, "Result must be true");
});

asyncTest('Category Retrieval for CDK2',1, function() { 
  

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



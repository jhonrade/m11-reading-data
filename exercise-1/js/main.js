// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {
    // Use $.get to read in your `data/students.csv` dataset: remember, you must be running a local server

    	$.get(data/students.csv) , function(data, error) {
    		console.log(data);

    	}	

        // Parse the data using Papa.parse

        var parsedData = Papa.parse(data, {
        	header: true // Indicates that the first row in the .csv file is the column name
    	}).data; // Get the data property from the parsing





        // Use jQuery to create a table, and store that in a variable
        var table = $('<table></table>');





        // Append a table header for each key in your first observation

        Object.keys(data[0]).forEach(function(d) {
        	var header = $('<th>' + d + '</th>');
            table.append(header);

        }






        // Iterate through your array and create a new table row for each element in your array


        data.forEach(function) {
        	var row = $('<tr>');

        }


            // Add a cell (<td>) for each key/value pair in your object

           	Objects.keys(d).forEach(function(dd) {
        		tr.append($('<td>' + d + '</th>'));

        	}
        	table.append(tr);


        // Select your `sandbox` section, and append your table to it

        $('SGSDGDSFSDF').append(table);

    });
});

guest_list = [];

function submit()
{
    display_guest_list_array = [];
    var guest_list_display = document.getElementById("Guest_Name").value
    console.log(guest_list_display);
    guest_list.push(guest_list_display);

    console.log(guest_list);
    var length_of_guest_list = guest_list.length;
    console.log(length_of_guest_list);
    for (var k = 0; k < length_of_guest_list; k++)
    {
        display_guest_list_array.push(" "+guest_list[k]);
        console.log(display_guest_list_array);
        
    }
    document.getElementById("display_guest_name").innerHTML = display_guest_list_array;
}

function sorting()
{
var sorted_names = display_guest_list_array.sort();
console.log(sorted_names);
document.getElementById("sorted_list").innerHTML = sorted_names;
}   

function search()
{
    var s = document.getElementById("display_guest_name").value;
    s = display_guest_list_array;
    var found = 0;
    var j;
    for (var j = 0; j < display_guest_list_array.length ; j++ )
    {
        if (s==display_guest_list_array[j])
        {
            found = found+1;
        }
    }
    document.getElementById("searched_name").innerHTML = "Name found "+found+" time(s)";
}
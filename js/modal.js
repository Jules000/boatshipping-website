$('img').on('click',function()
            {
                var sr=$(this).attr('src'); 
                $('#myimg').attr('src',sr);
                $('#myModal').modal('show');
            });
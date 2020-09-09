$(() => {

  const fetchPosts = () => {
    // make a GET request to `/api/posts`
    $.ajax({
      url: '/api/posts',
      method: 'GET',
      dataType: 'json',
      success: (posts) => {
        renderPosts(posts);
      },
      error: (error) => {
        console.error(error);
      }
    });
  };

  const $postsButton = $('#fetch-posts');
  $postsButton.click(() => {
    fetchPosts();
  });
  
  const renderPosts = (posts) => {
    // grab the "posts" div
    const $posts = $('#posts');

    // remove all children from the "posts" div
    $posts.empty();

    // create "post" elements for each post
    for (const id in posts) {
      const post = posts[id];

      const $post = $('<div>').addClass('post');
      const $title = $('<h2>').text(post.title);
      const $content = $('<p>').text(post.content);
      const $author = $('<p>').text(`Author id: ${post.author_id}`);

      // $post.append($title).append($content).append($author);
      $post.append($title, $content, $author);
      // $title.appendTo($post);

      // append to the DOM
      $posts.prepend($post);
    }    
  };

  const $postForm = $('#new-post');

  $postForm.on('submit', function (event) {
    // prevent the default browser behaviour
    event.preventDefault();

    // serialize the form data for submission to the server
    const serializedData = $(this).serialize();
    console.log(serializedData);

    // submit serialized data to the server via a POST request to `/api/posts`
    $.post('/api/posts', serializedData)
      .then((response) => {
        console.log(response);
        fetchPosts();

        // clear the input fields of the form
        $(this).children('input').val('');
        // $('#title').val('');
        // $('#content').val('');
        // $('#authorId').val('');
      });  
  });

});

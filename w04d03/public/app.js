$(() => {

  const fetchPosts = () => {
    $.ajax({
      url: '/api/posts',
      method: 'GET',
      dataType: 'json',
      success: (posts) => {
        console.log(posts);
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
  // $postForm.submit(() => {});
  $postForm.on('submit', function (event) {
    event.preventDefault();

    // console.log(event);
    const serializedData = $(this).serialize();
    // const serializedData = $(event.target).serialize();
    // const serializedData = $postForm.serialize();

    console.log(serializedData);
    // submit data to the server
    $.post('/api/posts', serializedData)
      .then((response) => {
        console.log(response);
        fetchPosts();

        $(that).children('input').val('');

        // $('#title').val('');
        // $('#content').val('');
        // $('#authorId').val('');
      });  
  });

});

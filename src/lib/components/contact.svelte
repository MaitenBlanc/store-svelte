<script></script>

<main style="background-color: black;">
  <div
    id="contact"
    class="container mx-auto">
    <div class="form-control bg-opacity-50 mx-50 my-1 bg-gray-200">
      <label class="input input-bordered flex items-center gap-2">
        Name
        <input
          type="text"
          class="grow" />
      </label>
      <label class="input input-bordered flex items-center gap-2">
        Email
        <input
          type="text"
          class="grow" />
      </label>
      <textarea
        class="textarea textarea-bordered"
        placeholder="Message">
      </textarea>

      <button class="btn btn-primary">SEND</button>
    </div>
  </div>
</main>

<style>
  .container {
    background-image: url(../../assets/img/contact.jpeg);
    background-size: cover;
    padding: 3em;
  }

  .form-control {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .btn {
    background-color: #ac4db1;
    border: none;
    font-size: 1.3rem;
    font-weight: bold;
    color: white;
  }

  .btn:hover {
    background-color: #ffc107;
  }
</style>

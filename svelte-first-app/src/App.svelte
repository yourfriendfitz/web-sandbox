<script>
  const fetcher = async () => {
    const api = await fetch(
      "https://secret-headland-59005.herokuapp.com/api/movies"
    );
    return api.json();
  };
  export let name;
  export let data = fetcher();
</script>

<style>
  h1 {
    color: purple;
  }
  li {
	  list-style: none;
  }
</style>

{#await data}
  <p>...waiting</p>
{:then array}
  <p>got the data</p>
  {#each array as { title, id }}
    <li>{title} - {id}</li>
  {/each}
{/await}

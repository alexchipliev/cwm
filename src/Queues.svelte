<script>
  import { Icon, Button } from "svelte-chota";
  import { mdiPencil, mdiDelete } from "@mdi/js";
  import { orders } from "./store.js";

  let open = false;
  const close = () => (open = false);
</script>

{#if $orders.length > 0}
  <table>
    <tr>
      <th>ნომერი</th>
      <th>ფასი</th>

      <th>პროდუქტი</th>
      <th class="right" />
    </tr>
    {#each $orders as order}
      {#if order.box == '0'}
        <tr>
          <td>{order.number}</td>
          <td>{order.product.cost}</td>
          <td>{order.product.desc}</td>
          <td class="right">
            <Button primary icon={mdiPencil} />
            <Button error icon={mdiDelete} />

          </td>
        </tr>
      {/if}
    {/each}
  </table>
{:else}
  <center>
    <span>არც ერთი ჩანაწერი არ მოიძებნა</span>
  </center>
{/if}

<style>
  .right {
    display: flex;
    justify-content: flex-end;
  }
  td,
  th {
    padding: 1rem 0.2rem;
  }
</style>

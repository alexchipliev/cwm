<script>
  import { Icon, Button } from "svelte-chota";

  import { mdiPencil, mdiCheckBold, mdiPrinter } from "@mdi/js";
  import { orders } from "./store.js";
</script>

{#if $orders.length > 0}
  <table>
    <tr>
      <th>ნომერი</th>
      <th>ფასი</th>
      <th>ბოქსი</th>
      <th class="right" />
    </tr>
    {#each $orders as order}
      {#if order.box != '0'}
        <tr>
          <td>{order.number}</td>
          <td>{order.product.cost}</td>
          <td>{order.box}</td>
          <td class="right">
            <Button primary icon={mdiCheckBold} />
            <Button primary icon={mdiPrinter} />
            <Button primary icon={mdiPencil} />
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

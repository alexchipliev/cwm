<script>
  import {
    Icon,
    Row,
    Col,
    Button,
    Tabs,
    Tab,
    Input,
    Radio,
    Field,
    Card
  } from "svelte-chota";
  import { router } from "tinro";

  import { orders, products, showNewOrder } from "./store.js";

  let car_number = "";
  let product_id = "1";
  let box_id = "0";
  let cost = "";
  let box = "";

  function addOrder(car_number, product, box_id) {
    $showNewOrder = false;
    let order = {
      number: car_number,
      product: product,
      box: box_id
    };
    orders.add(order);
  }
  function removeOrder(number) {
    let index = $orders.findIndex(n => n.number == number);
    $orders.splice(index, 1);
    localStorage.setItem("orders", JSON.stringify($orders));
    $orders = $orders;
  }

  function cancel() {
    $showNewOrder = false;
  }
</script>

<h2>ახალი შეკვეთა</h2>
<fieldset>
  <legend>შეიყვანეთ მანქანის ნომერი</legend>
  <br />
  <label for="number">მანქანის ნომერი</label>
  <input id="number" placeholder="მანქანის ნიმერი" bind:value={car_number} />
  <br />
</fieldset>
<legend>აირჩიეთ პროდუქტი</legend>
<br />
<fieldset>
  <p>
    <Radio value="1" bind:group={product_id}>სედანი</Radio>
  </p>
  <br />
  <p>
    <Radio value="2" bind:group={product_id}>სედანი (გარედან)</Radio>
  </p>
  <br />
  <p>
    <Radio value="3" bind:group={product_id}>სედანი (სალონი)</Radio>
  </p>
  <br />
  <p>
    <Radio value="4" bind:group={product_id}>ჯიპი</Radio>
  </p>
  <br />
  <p>
    <Radio value="5" bind:group={product_id}>ჯიპი (სალონი)</Radio>
  </p>
  <br />
  <p>
    <Radio value="6" bind:group={product_id}>პიკაპი</Radio>
  </p>
  <br />
  <p>
    <Radio value="0" bind:group={product_id}>სხვა</Radio>
  </p>
  {#if product_id == '0'}
    <Input autofocus="on" placeholder="შეიყვანეთ ფასი" bind:value={cost} />
  {/if}
  <br />
</fieldset>
<fieldset>
  <legend>აირჩიეთ ბოქსი</legend>
  <br />
  <p>
    <Radio avalue="1" bind:group={box_id}>1</Radio>
  </p>
  <br />
  <p>
    <Radio value="2" bind:group={box_id}>2</Radio>
  </p>
  <br />
  <p>
    <Radio value="3" bind:group={box_id}>3</Radio>
  </p>
  <br />
  <p>
    <Radio value="4" bind:group={box_id}>4</Radio>
  </p>
  <br />
  <p>
    <Radio value="5" bind:group={box_id}>5</Radio>
  </p>
  <br />
  <p>
    <Radio value="6" bind:group={box_id}>6</Radio>
  </p>
  <br />
  <p>
    <Radio value="7" bind:group={box_id}>7</Radio>
  </p>
  <br />
  <p>
    <Radio value="8" bind:group={box_id}>8</Radio>
  </p>
  <br />
  <p>
    <Radio value="9" bind:group={box_id}>9</Radio>
  </p>
  <br />
  <p>
    <Radio value="10" bind:group={box_id}>10</Radio>
  </p>
  <br />
  <p>
    <Radio value="0" bind:group={box_id}>რიგში ჩადგომა</Radio>
  </p>
  <br />
</fieldset>
<br />

<div class="is-right">
  <Button primary outline on:click={() => router.goto('/')}>გაუქმება</Button>
  <Button primary on:click={() => addOrder(car_number, product_id, box_id)}>
    დამატება
  </Button>
  <br />

</div>

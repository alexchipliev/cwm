<script>
  import "chota";
  import {
    mdiChevronDown,
    mdiCar3Plus,
    mdiHistory,
    mdiTrendingUp,
    mdiCancel,
    mdiLogout
  } from "@mdi/js";
  import {
    Container,
    Row,
    Col,
    Nav,
    Button,
    Tag,
    Icon,
    Card
  } from "svelte-chota";
  import { Route } from "tinro";
  import Orders from "./Orders.svelte";
  import NewOrder from "./NewOrder.svelte";
  import { products } from "./store.js";
  console.log($products);
</script>

<Route path="/">
  <Container>
    <Row>
      <Col>
        <nav class="nav">
          <div class="nav-left">
            <a class="brand" href="/">Logo!</a>
            <div class="tabs hide-xs">
              <a href="/" class="active">მიმდინარე</a>

              <a href="/stats">
                <Icon src={mdiTrendingUp} color="#00695c" size="1" />
                სტატისტიკა
              </a>
              <a href="/history">
                <Icon src={mdiHistory} color="#00695c" size="1" />
                ისტორია
              </a>
              <a href="/close">
                <Icon src={mdiCancel} color="#00695c" size="1" />
                დღის დახურვა
              </a>
              <a href="/logout">
                <Icon src={mdiLogout} color="#d43939" size="1" />
                გასვლა
              </a>
            </div>
          </div>
          <div class="nav-right hide-sm hide-md hide-lg">
            <Button
              dropdown="პარამეტრები"
              autoclose
              outline
              iconRight={mdiChevronDown}>
              <p>
                <a href="/">
                  <Icon src={mdiCar3Plus} size="1" />
                  შეკვეთები
                </a>
              </p>
              <p>
                <a href="/history">
                  <Icon src={mdiHistory} color="#00695c" size="1" />
                  ისტორია
                </a>
              </p>
              <p>
                <a href="/stats">
                  <Icon src={mdiTrendingUp} color="#00695c" size="1" />
                  სტატისტიკა
                </a>
              </p>
              <p>
                <a href="/">
                  <Icon src={mdiCancel} color="#00695c" size="1" />
                  დღის დახურვა
                </a>
              </p>
              <hr />
              <p>
                <a href="/" class="text-error">
                  <Icon src={mdiLogout} color="#d43939" size="1" />
                  გასვლა
                </a>
              </p>
            </Button>

          </div>

        </nav>
      </Col>
    </Row>

    <Row>
      <Col size="12" sizeMD="12" sizeLG="12">
        <h2 class="is-left">2020, 14 აპრილი, №1</h2>
      </Col>
    </Row>

    <Row>
      <Col size="12" sizeMD="12" sizeLG="12">

        <Row>
          <Orders />
        </Row>

      </Col>

    </Row>

    <Row>
      <Col size="12" sizeMD="12" sizeLG="12">
        <center>
          <span>© 2020 შექმნილია ალექსანდრე ჩიპლიევი-ს მიერ</span>
        </center>
      </Col>
    </Row>

  </Container>
</Route>

<Route path="/stats">
  <Container>

    <Row reverse>
      <nav class="nav">
        <div class="nav-left">
          <a class="brand" href="/">Logo</a>
          <div class="tabs hide-xs">
            <a href="/">მიმდინარე</a>

            <a href="/stats" class="active">
              <Icon src={mdiTrendingUp} color="#00695c" size="1" />
              სტატისტიკა
            </a>
            <a href="/history">
              <Icon src={mdiHistory} color="#00695c" size="1" />
              ისტორია
            </a>
            <a href="/close">
              <Icon src={mdiCancel} color="#00695c" size="1" />
              დღის დახურვა
            </a>
            <a href="/logout">
              <Icon src={mdiLogout} color="#d43939" size="1" />
              გასვლა
            </a>
          </div>
        </div>
        <div class="nav-right hide-sm hide-md hide-lg">
          <Button
            dropdown="პარამეტრები"
            autoclose
            outline
            iconRight={mdiChevronDown}>
            <p>
              <a href="/">
                <Icon src={mdiCar3Plus} size="1" />
                შეკვეთები
              </a>
            </p>
            <p>
              <a href="/history">
                <Icon src={mdiHistory} color="#00695c" size="1" />
                ისტორია
              </a>
            </p>
            <p>
              <a href="/stats">
                <Icon src={mdiTrendingUp} color="#00695c" size="1" />
                სტატისტიკა
              </a>
            </p>
            <p>
              <a href="/">
                <Icon src={mdiCancel} color="#00695c" size="1" />
                დღის დახურვა
              </a>
            </p>
            <hr />
            <p>
              <a href="/" class="text-error">
                <Icon src={mdiLogout} color="#d43939" size="1" />
                გასვლა
              </a>
            </p>
          </Button>
        </div>
      </nav>
    </Row>

    <Row>
      <Col>
        <h1>სტატისტიკა</h1>
      </Col>
    </Row>

    <Row>
      <Col>
        <Row />
      </Col>
    </Row>
    <Row>
      <Col>
        <center>
          <span>© 2020 შექმნილია ალექსანდრე ჩიპლიევი-ს მიერ</span>
        </center>
      </Col>
    </Row>

  </Container>
</Route>

<Route path="/history">
  <Container>

    <Row reverse>
      <nav class="nav">
        <div class="nav-left">
          <a class="brand active" href="/">Logo</a>
          <div class="tabs hide-xs">
            <a href="/">მიმდინარე</a>

            <a href="/stats">
              <Icon src={mdiTrendingUp} color="#00695c" size="1" />
              სტატისტიკა
            </a>
            <a href="/history" class="active">
              <Icon src={mdiHistory} color="#00695c" size="1" />
              ისტორია
            </a>
            <a href="/close">
              <Icon src={mdiCancel} color="#00695c" size="1" />
              დღის დახურვა
            </a>
            <a href="/logout">
              <Icon src={mdiLogout} color="#d43939" size="1" />
              გასვლა
            </a>
          </div>
        </div>
        <div class="nav-right hide-sm hide-md hide-lg">
          <Button
            dropdown="პარამეტრები"
            autoclose
            outline
            iconRight={mdiChevronDown}>
            <p>
              <a href="/">
                <Icon src={mdiCar3Plus} size="1" />
                შეკვეთები
              </a>
            </p>
            <p>
              <a href="/history">
                <Icon src={mdiHistory} color="#00695c" size="1" />
                ისტორია
              </a>
            </p>
            <p>
              <a href="/stats">
                <Icon src={mdiTrendingUp} color="#00695c" size="1" />
                სტატისტიკა
              </a>
            </p>
            <p>
              <a href="/">
                <Icon src={mdiCancel} color="#00695c" size="1" />
                დღის დახურვა
              </a>
            </p>
            <hr />
            <p>
              <a href="/" class="text-error">
                <Icon src={mdiLogout} color="#d43939" size="1" />
                გასვლა
              </a>
            </p>
          </Button>
        </div>
      </nav>
    </Row>

    <Row>
      <Col>
        <div style="max-width:300px">
          <Card>
            <h4 slot="header">ისტორია</h4>
            A nisi ullam impedit molestiae, sapiente id, numquam accusantium
            eius cum, iste eum iusto blanditiis doloribus beatae. Molestias iste
            explicabo libero nam, voluptas harum ipsum quod velit enim. Quae,
            cupiditate?
            <div slot="footer" class="is-right">
              <Button clear>Cancel</Button>
              <Button primary on:click={() => console.log('Hi!')}>
                Confirm
              </Button>
            </div>
          </Card>
        </div>
      </Col>
    </Row>

    <Row>
      <Col>
        <Row />
      </Col>
    </Row>

    <Row>
      <Col>
        <center>
          <span>© 2020 შექმნილია ალექსანდრე ჩიპლიევი-ს მიერ</span>
        </center>
      </Col>
    </Row>

  </Container>
</Route>

<Route path="/new">
  <Container>

    <Row>
      <Col>
        <nav class="nav">
          <div class="nav-left">
            <a class="brand" href="/">Logo</a>
            <div class="tabs hide-xs">
              <a href="/" class="active">მიმდინარე</a>

              <a href="/stats">
                <Icon src={mdiTrendingUp} color="#00695c" size="1" />
                სტატისტიკა
              </a>
              <a href="/history">
                <Icon src={mdiHistory} color="#00695c" size="1" />
                ისტორია
              </a>
              <a href="/close">
                <Icon src={mdiCancel} color="#00695c" size="1" />
                დღის დახურვა
              </a>
              <a href="/logout">
                <Icon src={mdiLogout} color="#d43939" size="1" />
                გასვლა
              </a>
            </div>
          </div>
          <div class="nav-right hide-sm hide-md hide-lg">
            <Button
              dropdown="პარამეტრები"
              autoclose
              outline
              iconRight={mdiChevronDown}>
              <p>
                <a href="/">
                  <Icon src={mdiCar3Plus} size="1" />
                  შეკვეთები
                </a>
              </p>
              <p>
                <a href="/history">
                  <Icon src={mdiHistory} color="#00695c" size="1" />
                  ისტორია
                </a>
              </p>
              <p>
                <a href="/stats">
                  <Icon src={mdiTrendingUp} color="#00695c" size="1" />
                  სტატისტიკა
                </a>
              </p>
              <p>
                <a href="/">
                  <Icon src={mdiCancel} color="#00695c" size="1" />
                  დღის დახურვა
                </a>
              </p>
              <hr />
              <p>
                <a href="/" class="text-error">
                  <Icon src={mdiLogout} color="#d43939" size="1" />
                  გასვლა
                </a>
              </p>
            </Button>
          </div>
        </nav>
      </Col>
    </Row>

    <Row>
      <Col size="12" sizeMD="12" sizeLG="12">
        <h2 class="is-left">2020, 14 აპრილი, №1</h2>
      </Col>
    </Row>

    <Row>
      <Col size="12" sizeMD="12" sizeLG="12">
        <NewOrder />
      </Col>
    </Row>

    <Row>
      <Col size="12" sizeMD="12" sizeLG="12">
        <center>
          <span>© 2020 შექმნილია ალექსანდრე ჩიპლიევი-ს მიერ</span>
        </center>
      </Col>
    </Row>

  </Container>
</Route>

<style>
  :global(:root) {
    --color-primary: #00695c;
    --color-lightGrey: #d2d6dd;
    --color-grey: #747681;
    --color-darkGrey: #3f4144;
    --color-error: #d43939;
    --color-success: #28bd14;
    --grid-maxWidth: 120rem;
    --grid-gutter: 1rem;
    --font-size: 1.4rem;
    --font-family: "Helvetica Neue", sans-serif;
  }
  /* .right {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  } */
</style>

<template>
  <div class="uk-width-1-1">
    <!--div v-if="!connected" class="wallet-outer uk-width-1-1">
      <div class="wallet-inner">
        <span uk-icon="icon: more; ratio: 3"></span>
        <p>Please connect to wallet</p>
      </div>
    </div-->
    <div class="uk-width-1-1">
      <hr />
      <div class="uk-inline form-icon">
        <div
          uk-form-custom="target: > button > span:first-child"
          style="padding-left: 0px; padding-right: 0px"
        >
          <a class="uk-form-icon uk-form-icon-flip input-form-icon">
            <span>CDP#</span>
          </a>
          <select
            v-model="cdp"
            aria-label="Custom controls"
            class="form-button uk-form-width-medium uk-form-large"
            @change="changeCDP"
          >
            <option value="">Please select...</option>
            <option value="0">CDP #0</option>
            <option value="1">CDP #1</option>
            <option value="2">CDP #2</option>
            <option value="3">CDP #3</option>
          </select>
          <button
            class="uk-button uk-button-grey form-button uk-form-width-medium uk-form-large uk-text-left"
            type="button"
            tabindex="-1"
            style="max-width: 100%"
          >
            <span></span>
            <span
              uk-icon="icon: chevron-down"
              style="float: right; position: relative; right: 95px; top: 17px"
            ></span>
          </button>
        </div>
      </div>
      <div class="wrap">
        <span class="icon-circle" uk-icon="icon: plus; ratio: 1;"></span>
      </div>
      <div class="uk-inline form-icon">
        <a class="uk-form-icon uk-form-icon-flip input-form-icon"><span>PDC#</span></a>
        <input
          class="uk-input input-form uk-form-width-medium uk-form-large"
          type="number"
          v-model="formattedFOXS"
          @input="inputFOXS"
        />
      </div>
      <hr class="custom-divider-vertical" />
      <div class="description">
        <span style="font-weight: bold">EXCHANGE RATES</span><br />
        USDC: $1.000<br />
        FXS: $6.015<br />
        FRAX 0.3000% <br />
        SWAP FEE (0.00000 USDC)
      </div>
      <div class="wrap">
        <span class="icon-circle" uk-icon="icon: arrow-down; ratio: 1.5;"></span>
      </div>
      <div class="uk-inline form-icon">
        <a class="uk-form-icon uk-form-icon-flip input-form-icon"><span>CDP#</span></a>
        <input
          readonly
          class="uk-input result-form uk-form-width-medium uk-form-large"
          type="number"
          v-model="formattedWETH"
        />
      </div>
      <hr />
      <button class="uk-button uk-button-default uk-button-large form-button">
        Connect Wallet
      </button>
    </div>
  </div>
</template>

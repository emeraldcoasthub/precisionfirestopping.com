<template>
<div id="home">
  <div class="container mt-3">
    <h1 class="text-center mt-5 mb-5">{{ pageTitle }}</h1>
    <b-breadcrumb :items="items" />
    <b-row class="justify-content-center">
      <b-col cols="12" md="6" class="mt-3">
        <form name="bid-request" action="/thank-you" method="POST" netlify>
          <div class="form-group ">
            <input class="form-control" required id="company" name="company" type="company" placeholder="company"/>
            <label for="company">Company</label>
          </div>
          <div class="form-group ">
            <input class="form-control" required id="project" name="project" type="project" placeholder="project"/>
            <label class="control-label" for="project">
            Project Name
            </label>
          </div>
          <div class="form-group ">
            <input class="form-control" required id="city" name="city" type="city" placeholder="city"/>
            <label class="control-label" for="city">
            City
            </label>
          </div>
          <div class="form-group-no">
            <label class="control-label ">
            Scope of work
            </label>
            <div class=" ">
            <div class="checkbox">
              <label class="checkbox-inline">
              <input name="checkbox" type="checkbox" value="Plumbing"/>
              Plumbing
              </label>
            </div>
            <div class="checkbox">
              <label class="checkbox-inline">
              <input name="checkbox" type="checkbox" value="Edge of Slab"/>
              Edge of Slab
              </label>
            </div>
            <div class="checkbox">
              <label class="checkbox-inline">
              <input name="checkbox" type="checkbox" value="Construction Joints"/>
              Construction Joints
              </label>
            </div>
            <div class="checkbox">
              <label class="checkbox-inline">
              <input name="checkbox" type="checkbox" value="HVAC Wet"/>
              HVAC Wet
              </label>
            </div>
            <div class="checkbox">
              <label class="checkbox-inline">
              <input name="checkbox" type="checkbox" value="HVAC Dry"/>
              HVAC Dry
              </label>
            </div>
            <div class="checkbox">
              <label class="checkbox-inline">
              <input name="checkbox" type="checkbox" value="Electrical"/>
              Electrical
              </label>
            </div>
            <div class="checkbox">
              <label class="checkbox-inline">
              <input name="checkbox" type="checkbox" value="Top of Wall Joint"/>
              Top of Wall Joint
              </label>
            </div>
            <div class="checkbox">
              <label class="checkbox-inline">
              <input name="checkbox" type="checkbox" value="Grease and Flume Duct Wraps"/>
              Grease and Flume Duct Wraps
              </label>
            </div>
            <div class="checkbox">
              <label class="checkbox-inline">
              <input name="checkbox" type="checkbox" value="Expansion Joints"/>
              Expansion Joints
              </label>
            </div>
            </div>
          </div>
          <div class="form-group-no mt-1 mb-3">
            <label class="control-label " for="textarea">
            Detailed description of project
            </label>
            <textarea class="form-control" required cols="40" id="textarea" name="textarea" rows="10"></textarea>
          </div>
          <div class="form-group">
            <input class="form-control" required id="name" name="name" type="text" placeholder="name"/>
            <label class="control-label " for="name">
            First and last name
            </label>
          </div>
          <div class="form-group ">
            <input class="form-control" required id="email" name="email" type="email" placeholder="email"/>
            <label class="control-label" for="email">
            Email
            </label>
          </div>
          <div class="form-group ">
            <input class="form-control" required id="tel" name="tel" type="tel" placeholder="tel"/>
            <label class="control-label" for="tel">
            Phone
            </label>
          </div>
          <div class="form-group ">
            <input class="form-control" required id="companyAddress" name="companyAddress" type="text" placeholder="companyAddress"/>
            <label class="control-label " for="companyAddress">
            Company Address
            </label>
          </div>
          <div class="form-group ">
            <input class="form-control" required id="jobAddress" name="jobAddress" type="text" placeholder="jobAddress"/>
            <label class="control-label " for="jobAddress">
            Job Site Address
            </label>
          </div>
          <input class="form-button btn btn-primary mb-5" type="submit" value="Submit"/>
          </form>
      </b-col>
    </b-row>
  </div>
</div>
</template>

<script>


export default {
  components: {

  },
  head () {
    let title = this.pageTitle;
    return {
      title: title,
      meta: [{
          hid: `description`,
          name: 'description',
          content: `Fill out this form if you're interested in our firestopping services.`
        }
      ]
    }
  },
  data () {
    return {
      pageTitle: 'Bid Request Form',
      items: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Bid Request Form',
          href: '/bid-request'
        }
      ]
    }
  }
}
</script>

<style>
.form-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-group > input,
.form-group > label {
  height: 3.125rem;
  padding: .75rem;
}

.form-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0; /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  pointer-events: none;
  cursor: text; /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-group input:-ms-input-placeholder {
  color: transparent;
}

.form-group input::-ms-input-placeholder {
  color: transparent;
}

.form-group input::-moz-placeholder {
  color: transparent;
}

.form-group input::placeholder {
  color: transparent;
}

.form-group input:not(:placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: .25rem;
}

.form-group input:not(:placeholder-shown) ~ label {
  padding-top: .25rem;
  padding-bottom: .25rem;
  font-size: 12px;
  color: #777;
}
/* Fallback for Edge
-------------------------------------------------- */
@supports (-ms-ime-align: auto) {
  .form-group > label {
    display: none;
  }
  .form-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .form-group > label {
    display: none;
  }
  .form-group input:-ms-input-placeholder {
    color: #777;
  }
}
</style>

<template>
  <!--  <section class="contact_area section-padding">-->
  <!--    <div class="container">-->
  <!--      <h3>Make comments</h3>-->
  <!--      <div class="row">-->
  <!--        <div class="col-md-6 col-sm-6 col-xs-12 wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">-->
  <!--          <div class="">-->
  <!--            <form method="post" enctype="multipart/form-data" _lpchecked="1">-->
  <!--              <div class="row">-->
  <!--                <div class="form-group col-md-12">-->
  <!--                    <textarea rows="6" name="message" class="form-control" id="description"-->
  <!--                              placeholder="Write Your Comments Here"-->
  <!--                              required="required"></textarea>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </form>-->
  <!--          </div>-->
  <!--        </div>&lt;!&ndash; END COL &ndash;&gt;-->
  <!--        <div class="col-md-6 col-sm-6 col-xs-12 wow fadeInRight"-->
  <!--             style="visibility: visible; animation-name: fadeInRight;">-->
  <!--          <div class="">-->
  <!--            <form method="post" enctype="multipart/form-data" _lpchecked="1">-->
  <!--              <div class="row">-->
  <!--                <div class="form-group col-md-12">-->
  <!--                  <input type="text" name="name" class="form-control" id="first-name" placeholder="Name"-->
  <!--                         required="required">-->
  <!--                </div>-->
  <!--                <div class="form-group col-md-12">-->
  <!--                  <input type="email" name="email" class="form-control" id="email" placeholder="Email"-->
  <!--                         required="required">-->
  <!--                </div>-->
  <!--                <div class="form-group col-md-12">-->
  <!--                  <input type="text" name="organization" class="form-control" id="organization"-->
  <!--                         placeholder="Organization"-->
  <!--                         required="required">-->
  <!--                </div>-->
  <!--                <div class="col-md-12">-->
  <!--                  <div class="actions">-->
  <!--                    <input type="submit" value="Send comments" name="submit" id="submitButton"-->
  <!--                           class="btn btn-lg btn-contact-bg pull-right" title="Submit Your Message!">-->
  <!--                  </div>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </form>-->
  <!--          </div>-->
  <!--        </div>&lt;!&ndash; END COL &ndash;&gt;-->
  <!--      </div>&lt;!&ndash;- END ROW &ndash;&gt;-->
  <!--    </div>&lt;!&ndash;- END CONTAINER &ndash;&gt;-->
  <!--  </section>-->
  <div class="modal fade" id="modal-comment" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
       aria-hidden="true" style="display: none;">
    <div class="modal-dialog" style="background: white;width: 80%;height: 80%">
      <div class="modal-content" style="width: 100%;height: 100%">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
          <h4>Make Comments</h4>
        </div>
        <div class="modal-body" style="width: 100%;height: 75%">
          <iframe style="width: 100%;height: 100%" :src="commentLink"></iframe>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <section class="comment bg-primary" style="padding: 5px">
    <div class="container text-center">
      <h3>{{ $t("message.commentArea.commentTitle") }}
        <a href="javascript:void(0)"
           class="btn btn-default btn-promotion-bg"
           data-toggle="modal" data-target="#modal-comment">
          {{ $t("message.commentArea.btnComment") }}
        </a>
      </h3>
    </div><!--- END CONTAINER -->
  </section>
</template>

<script>
export default {
  title: "CommentTable",
  setup() {
    const commentLink = "https://www.wjx.cn/vj/rvRafMp.aspx"
    return {commentLink}
  }
}
</script>

<style scoped>

</style>
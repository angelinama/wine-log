$(document).ready(() => {
  const wineratingForm = $("form.winerate");
  const aromaFruit = $("#fruit");
  const aromaHerbal = $("#herbal");
  const aromaEarth = $("#earth");
  const aromaFloral = $("#floral");
  const aromaSpice = $("#spice");
  const aromaChemical = $("#chemical");
  const wineId = $("#wineId").val();
  const reqObj = { wine_id: wineId };

  wineratingForm.on("submit", (event) => {
    event.preventDefault();
    reqObj.overall_score = $("input:checked", ".allrating").val();
    reqObj.sweetness_score = $("input:checked", ".sweetness").val();
    reqObj.acidity_score = $("input:checked", ".acidity").val();
    reqObj.tannis_score = $("input:checked", ".tannins").val();
    reqObj.body_score = $("input:checked", ".wbody").val();

    reqObj.fruity = $(aromaFruit)[0].checked ? true : false;
    reqObj.herbal = $(aromaHerbal)[0].checked ? true : false;
    reqObj.earth = $(aromaEarth)[0].checked ? true : false;
    reqObj.floral = $(aromaFloral)[0].checked ? true : false;
    reqObj.spice = $(aromaSpice)[0].checked ? true : false;
    reqObj.chemical = $(aromaChemical)[0].checked ? true : false;

    // console.log(reqObj);

    $.post("/api/reviews", reqObj)
      .then((data) => {
        console.log(data);
        //TODO should redirect to summary page for a wine
        window.location.href = `/winesummary-${wineId}`;
      })
      .catch((error) => {
        if (error.status === 401) {
          alert(error.responseText);
          window.location.href = "/";
        } else {
          console.log(error);
          alert("something went wrong when submitting a review");
        }
      });
  });
});

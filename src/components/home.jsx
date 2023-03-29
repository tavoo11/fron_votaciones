import React from "react";
import '../asset/css/home.css'
import { useNavigate } from "react-router-dom";
import { MDBCol, 
    MDBContainer, 
    MDBRow, 
    MDBCard, 
    MDBCardText, 
    MDBCardBody, 
    MDBCardImage,
    MDBBtn,
     MDBTypography } from 'mdb-react-ui-kit';

function Home(){
  const navigate = useNavigate();

  function manejadorBoton(name) {
    if (name === 'candidatos') {
      navigate("/candidato");
    } else if (name === 'votaciones') {
      navigate("/estudiante");
    } else {
      navigate("/resultados")
    }
  }



    return(
        <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", backgroundSize: 'cover', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTExYTExMWFhYYFhwWGRkYGBoXGBoaGRgbGSEZGhwZISoiGx4nHhYYIzMjKCstMDQwGyI2OzYuOiovMC0BCwsLDw4PGxERHC8nIScvLy8vLy8xLy8vLTEwLy8vLy0tLzIvLy8vLzEvLy8tMS8vLy8vLy8vLy8vLy8vLy8vLf/AABEIANcA6wMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQYEBwECAwj/xABMEAACAQMCAgYFCAUJBQkAAAABAgMABBESIQUxBhMiQVFhBzJxgZEUIzNCUmJyoSRTgpKxFWNzoqOywcLwQ4OTtNEWF1SUs9Lh4vH/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAqEQADAAICAwABAwMFAQAAAAAAAQIDESExBBJBURMiQjJhkRRSgaGxBf/aAAwDAQACEQMRAD8A3jSlKAUpXnI4UFmIAAySdgAO8mgPSqxPxKW7ZobRtEakpLcgAhSNjHBkYeQci+6qftHIEXxXjnypGZGZLNXRHZGInuOsYKFiA7SRsWABHakz2cL2mxo+OSrIxhxBbQAKsbx9XAUQhZI5To1wzLqUoB2WUrjVk4AnRwia17VmzSJtrgmkZtR5F4pXJKOeZDZVjv2SSxkOE8ehnJQEpKoy8Mg0Sr3ZKnmu2zLlT3E149Huk9veBjC+6+sjDS4Hc2n7J8fdzBFZXGuG28yZnjDBAXDbh0wDlkZcMjYzupBoQmnyiTpVJ4VdyMC9pdymMKHxfW0qpoPLq52WNiO/JMlZNj0nuGRn+SrIFeRCYZ03MTmNjicRYAZSM5I8zzoSW2lVz/tK+SDY3IZRkrqtSQPE4n2HnWDcdMZABptCGMbyosk0WXSIAsVFuZi2MjYDJ7gaAuNRfFuNQ2+nrG7bnCRqC8jnwRF7Te4YHfio0RXcwBluo4EP1bdQZMjcqZZsjkN8RgjfcVncF4VbRAvAAzP60pYySPj7UjEsR5ZwO4CgK/ccRuJXYtM1oyJrWJYWnVRgvqupFUpuqnsI64ye0xxiW4b0jBZYblOolbGjJzDLkZzDIQA34Dhx9nG5r/SO74dHeEzTussiCKQKkLrEuhlBd2jLxZEh5N5kAZq5tZwywiJlWWIoFwwDqy42z3GoI2jPpVc/kKaHe0uWRf1U4NxEN89klhIn75Udy1jcP6UyyatMEdxpOGa0uIpQM8iyymMjOOQ1eRNSSWylV6fpXFGCZYLtAAST8mmcAAZJLRKygeea7J0ojbZLe8J87WeP85VUfnQE/Sq4OM3MhKxWRVhg/pE0cYwc4bTEZXHJsZAzg0PB7mbPym6Kqc/NWwMKkHuaUkyE+alPZQGRxLpAkb9TGrTz4+hiwWGeTSH1Yl29ZyM92TtUe/CL18XDXAS4X1IlybUKecTjZpM7Zk2IIBUAZUygW1sYWIEcES9onGkEnvPezE+0k+NefR3pJBeIWhYkqcMrDS48CV8D3H/EEARtb0d+C8aWfUjKYp48dbC3rLnkynk8Z3w42OO4ggTFQXSSxiZBO8ot5IQWS4yq9XnmGLbNGcDUh2PkQCMXot0qS5Co5QSEFlZCTFOqtpMkBO5AIwyHtIdjkYYiSz0pSgFKUoBSlR3FuKR26a5CdzpVVGp3Y8kRRuzHw9/IUB7312kKNJI4RFGSx5D/AF4VUOI34mUzXgaO1XS62+MyOhbAnuVG6xA76OQAJffsrEcbvJpHSeYrojc5VGZksmB7EsqrtcMDkSY7KDIGMFmwGgitoFmucqrBzFDG7dcWcAOscysM2jqA2mRcrkDYhRQNpLbMq/nMkayXnWRAD57UumKTLIRb26oR1vqmSOdWLIVXJwSBSeM8Xac6VDJEGLrGXaQljsZJXclpJCABknYAAbc/LivFJJ2DPpVVXRHGg0xRIOSRryA2G/M48gBhVjV7PNzeQ6/bPX/p3gmdHDozI6nKspwwPkR/Cr3wv0lSGNorpNepCnWxgBhkEZdNgefNSPZVBpUKmjKMtx0bH6PQQTW628dza6l6hgD1wLtA6tiSKZgdLaT6veQd8VJz9ApTE8aTRL1kV1E3zR0hbqcTDQA22nGnGcb57q1Iyg8xmve3vJY/o5pU/BI6D+qRV1k/J0z5i/kjcc/RGQtcaZIPnTMyu8AkmBmKEozMcGMacYxy0D6u+BP0CbQwMsS6o7yMkox0i7VMFSzZyjIefMO3LNazPG7rkbq5/wDMS/8AurEuJnk+kd5Pxsz/AN4mp/URZ+ZPxM2Hx6eziknZbxGZ4HVIo4xOEnkjWJ5SMlN0jQaWIHaf7RqqQ9KriOOWOFhCksplbRkyboiaQ5PZHYztvk7EVB4rmqO2Y35VVwuDj/8Afee+pzo70rubPaJ9UecmJ90/Z70Ps233BqDJrqZR452zt/ryqq46MZq5e0bgtvSFaXMTxTFrZnRky26DUpGQ67DGfraa7RWVzcQppNm6xmNQkUz6ZkjjkX5yVUyg1OjqgU4KesdW2nFlBOPb78HFeibHUNj4jY/Eb1dZH9OpeXS4pG2LnoRdPDKjzrLI8bR62eQBlNikA1LggfpCGQ89t9ztWQOidyXctIoRpYm0iZ8GNZ4pDGQIwezHG8anUcg74ycasj4xcryubkeyeUf5q6y8VuG9a5uG/FNIR+bVP6iL/wCsn8M2JxHg5tu3JNbgaYgyyXDx9asTTjqmOgsFxLEwIBJMWnGDmvL/ALxkt7eKGLVcypEqNK+pIyyqAW7fzj7jvAz41rMKM5xueZ767VDyP4ZX5dP+laJDjXGp7p9c8hfHqqOyifgXu9pyfEmvDh1/JBIssTlHXkR3jvVh9ZT3isalU39OZ3Tftvk2I1zHxSNpozIvEYU1wwtIGh1qCNUccuYyrau0SNS7bjYnOFzHHAkM0WiygKwR3LOyXBuFypmhTGogvkZG57RwVzWr4ZWRldGKspyrKcEHxBrZvRjpPHeMizBFvY0dbeR8mJmdcatAIAfYZHMgtpIyQNJvfDO/D5Cr9tdlh4L0mCyLbTzJIzIrw3CY6udHyF1ado5TpO3qtgle9VttagvLVlmFvODLpnXTBICz3jyECS8dkbTHGgLaF5JoGQDpAtfC+Oi3ZopZjLbo2gTvqEsJzgJc6gCVOOzPyOO1v2m0OoulK4BrmgIjjHGVg0oFMs0mRFCvrPjmx7kQZGpzsPaQDReIG6S5HyjPXs2VeE5Pycr2ks9YwsqNhpFYF5EGQdgq2fonGEmuVl3uxJmRycmSFixiZPsx4yugbBlfmdzZZIwe7ccj3juyPcTQGrOKtBw11lcRy3wD6VjAVBrLjrpDjWmtXJMYbSWJIH1hQuI30s0jTTOXduZPh3ADkqjuA/61k9JOHywXMsUrM7htWttzIrbrIT3kjY+BBHdUdWN02eXny1Ver4QpSlUMBSlKAUpSgFM0rsoHece6jeiZW3o65ry0eznz78eH+HOpaDhgcbPp8NQ2PsYbZ8qkeGxdSereJSXY4kzlT4DOCRy5Vm8i+HZi8O988J/eyriEd5z/AKH+IrvoHh/rOf8ArV66o/qo/j/9KxuIWJdMKkanOc+IwdvV25g+6oWXnk6q/wDm1/u/6KgBXNZd9BowCAD4Dw38hWJWiezzM2N47ct7FKUqTMUpSgFKUoBXFc0oC/8AR7pelxE1jxFjokXQs2cZ3GFkJ27h2jseTed76N9GEtlkyRI0pwx0hU6sFtESxjsqiqx7I2JZj34rQn5+zcnyAHOt/dC+HS29pFHK5ZwMkE50Z3EYPgowPdttgVtFNno+Nkq01Xz6YnVScOyYw0ln3xgFpLcd5jHN4R9jmv1cjsiyWtysiLJGwdGAZWUgqQe8HvFY3GeJJbwvM+SFGyj1mYnCoo72ZiFA8SKr/DOhaGMNNqWVy0jrHIURWkYuVUKAMAtjON8ZO5q51Gd0otnTReRKWlt86lXnLC2Osjx3tgB1H2kA5MamrS4SVFkjYMjqHVhuCrDII8iDWRVb4D+jzy2R9Qg3Fv8A0bN85EP6ORs+SyoO6gIb0rcA62D5Qg+cgyTjm0R9Yfs+t7A3jWn6+mZEBBBGQdiPKvnvpRwc2lzLDjsg6o/ONt1+G6+1TWdr6cPl4/5L/kiqUpWRxClKUApSlAKUpQHpBcOnqMy+w4qS4bK8pKuToUZ7IA7R5csDxPjyqJrLseJSRAhCME5IIzvgD/AVSp2uDr8XN6Wven6lhhEyNs4MfPtqdXn2gcD4VICUHyJ5A7GqoeNSnc6fzH+NYlzdF21kDXnOrvHhjwxWLx0eqvPwv+X+dnrxaQtK5b7RHw2/wrErtcyNISWO55kDGa610StI8XyHDt1L3vsUpSpMRSuCayLOxml+iikl/o0Zx8VGBUkpN9HhSrPY+j7iEvOFYh4yyKPyTU3xAqx2PonPOa590af5nP8AlqfRms+Pb+Gta4zvjv7h31uyx9G9hHgsjykd8jsR71TSp+FTq2lvaRs8cMcaopY9WiqcAZ20jcmrLGzafDf8mar9GvRtprnrZo2WOHD4dSuqQ7psw3A9b26a3RUfwe1ZI8yfSOTJJ39tu4HvCjCDyUV49I+JNBAzRgNKxEcKnk0sh0oDj6oJyT3KrHurSVpHXjxqJ0jAP6XeY/2No2T4Pcldh5iJGz+KQcilWao7gfDVtoUhUltIyzH1ndiWaRsfWZizH21I1JoKrvTCNljS6QZe1frsDOWixplTA55jLED7Sr4VYq6SKCCCMg7EUB1icMAwOQRkEciDuDWvfTFwrVFHcqN426t/wSHAPufSP2zVk6Ftoia2J7VrK1v3+oMPFnO5+Zki38c1Jcd4eLiCWE8pI2X2EjY+44PuqGtrRTJPtLR850ppI2YYI2I8COY9x2pXOeP0KUpQClKUApSuGYDcnHtoDmlZlhwqebHVQyyA8iqMV/exp/OrDYeji/kwWSOIfzkgz8Iw38RU6bNJxXXSKlStn2PonUbzXLN5RIE92XLZ+Aqx2Po+sI9zD1h8ZGZx+6Tp/Kr+jNZ8S33waNQajpXdvsjc/Ab1NWHRG+l9S2lA8XAiH9oQfhW+LSxiiXTFGkajuRQg+CismpWNG0+JP1moLD0W3TbyyxRDwXVKf8oz7zVisPRZarvLJLL5ZCL/AFRq/rVfq5qylI3nBE9IguH9ErKHBjtosjkzL1jfvPlvzqbC4rmuasaJJdClKUJFRHE/nJYYe7PXP+GMjSvvkKN5iNql6ieE9uSebmDJ1SfhhypH/FM3uxQEtVcHz9+e+O0XA5YNxMvxBSIj/j1OXM6xo0jnCopZj4BRkn4ConobbstskkgIlnLXEgPMNMdeg/gUqnsQUBO0pSgFKUoCvIer4kwztcW4cDu1276WPtKTxj9irBVf6RgrNZSjYC4MTfhmhkXH/EER9wqw0B8+9OLHqr64QDAMnWD/AHoEh/rMw91QlbW6b9EJLy9UxuifMLqLZ+q7jsgDf1h3jurix9FEQwZriR/KNVjB8jq1H4EVk4bfB5+Txqq3ro1VXaCNnOmNWdvsoC7fBcmt62HQWwi5W6ufGUmX8nJA+FT8FuiDSiqo8FAUfAVKx/ktPiP6zRNh0Kv5cYt2QHvkKx/EMdX5VYbD0UztgzTxx+IRWkPxJUD4GttCualQkbT40L+5RrD0X2abyGWU/efSPhGFPxJqx2HRy0gOYreJT9rQC37x3/OpalWSSNZiZ6RwTXHWCo++u9NQF9xzT302aaJR+HZujMW7GlCuysQ41q2C4JUFSnq43B8a7cA4c8OrXOZchRk53K5y5GcAtkZ9nM7Yp03SY6udd06Skd9Rsn1NjhxXeqnwnjOsjerRC+RUpkNaPSlKVJApSlAKUpQGPe3AjjeRuSKXPsUE/wCFePB7cxwxo3rBBqPixGWPvYk149Iz8wVxnW8cR9ksqRn8nNSlAV7pr2rcQd9zLHb48Udsyf2Kyn3VYBVf4sQ9/Zx/YWe596KkA/5lqsNAKUpQClKUBXum+1vGw5rd2hHvu4V/gxqw1Xelnba1gwSZLqNzjuW3zcFj5ZiRfa4qxUBFXB/TIR428+f2ZLfH941K1FnDXY/m4D/bSDH/AC5qUoBSlKAUpSgFcNXNdW5UBU+Pz4JFa7vLiaVykaMxHPAzV96TDc1Qbp5IZlmhOlvHnnyPtqnJqj2t+it3JEJNBRus0Yk7HZIHaGd8VKJ0PkQF5XBwO46Rt+f8KmOj3F570GF1AKrqLqMLkcgfAny86qvG+M3jq1vKoQIxVwucnBPM+Hf76JPZPBldErpix3zvW1eHPlRWpOiy8u6tr8K9UVb6UokKUpUlBSlKAUpSgIzjP+xHjOn5Zb+KipOovj5wiP8AZnhPuaVUJ9wcn3VKUBAgZ4kfu2gx+3Mc/wDpr8Knqr183V8Qt3OAs0EsH+8UpMg/cWc+6rDQClKUArgmuarXSSZp3WwiJDSrrnYEgx24OlsEcmkOUU/jYepQHHAj8pnkvT9GAYLbzjDZklH9I6gDuKxofrVZq8YIVRVRVCqoCgDYAAYAHlio/jMpbTAhIeXIJHNIxjW/kcEKPvMDyBoBwTtmWfukfCf0cY0KR4hjrceTipavKGJUUKoAVQAAOQAGAB7q9aAUpSgFKUoBXVuVdq4NAUvpU+kE4qs8CtflGrUBpDY38fKr3x+AaSdOapXDeMfJ1KfJp2YuzHRGSBl2IGTgciKrW0lo1jkt/DeGvApMOgl8A5zj8W3tqNuuj/MzS6nbJZseWBt4VA33TV0U4tJwRv2iF/Leutz0uuZmyli2jbBMqgnzxuBUJ3+CdHHA1UXDwkaWU8j3qeTL4itnWCYUVraJLqWeGaO00OmQxaZMMh5qQB8DW0I1wKuqbXK5K0elKUoZilKiOJdJLSDaa4iQ/ZLjV+6O0fhQEtStf8R9LNlHtGssx+6mhfjIQcewGqtxD0v3L7QwRReblpT+WgD4GtJxW/hOmbf4lbCWJ4yca1K5HMZGMjzHP3V14VeGWJXIw2MOPsupKuvuZWHur574l00v58h7qQA90ZEQ/swD8TVr9D/SgxytaTMSsrF42Yk4kxupJ+0BkeYPe1WrBUz7Mn1Nn9JOGtPCVjIWVGEsLHksqHK5x9U7q3irMK9eBcUW4iWVQVJyHQ+tG6kq8bfeVgQfZUlVYvf0O5E42guWWOYbAJOcJHN7H7MTefVnxNYlSz0pSgOp5b1Xuhy9ZG943rXT9aPKEDTCozyHVgOR9qR/GsrphOY7G7kXZktpmHtWJiP4Vn8OiCRRovJY1UewKAKA73U6xo0jnCqCzHwAGT/CsLg9u2GmkGJZcEg/UUZ0R/sg5P3mc99deO9owRH1ZJwG9kaPOB7C0Kg+RNS1AKUpQClKUApSlAKUpQHlLEGGCKxf5Kj8K9bu+jiGqWRI18XYKPiTVY4h6SeHRbCfrT4RKzg/tep/WqyTfRK2TN30ehk5ikPAYl7s1r7iPpjHKC1J85XA/qoDn96qvxP0kcSk261YRkjEcYXl5yam28iK1nFkZK2b2igjjGdgPE7CoXiXTnh8OQ91GSOaxnrWB8CI8499aJntry5wZeukyxUGZjp1DJIBlIGRg7f9awb6yeCRopV0upwRkHGQCNxsQQQdqvPj7fLJ9TbnEfTBAuRDbySHuLlYlP8Aeb8qq/EfStfSZEYhhHdpUuw/ac4P7oqiUrefHhfBok+IdILuf6W4mceBchf3Vwv5VFqoHIAeyuaVopS6JFKUq4Fco5BDAkEEEEbEEHII8CCK4pUA+iegPSP5barI2OtU9XKB9sAdoDuDAhh7cd1TfE7COeKSKQZSRSjDyYY28D51pz0J3jLeSRD1JLcuR96N0Cn4SOPeK3fXl5I9LaKMheil5JJABMczRM0Ep5aniYoXx3BwA48mFTVV/gAxc36jl8ojf2FrWEH+6D76sFUIMa9tVljeJvVdGQ+xgVP5GozohdtJaQ6/pEXqZR4Swnq35741ISPIg1OVV70/Irgz4/RpyomPdFNgIsx+46hUc9xVDyLEATHGLdnj7GOsRlkTOw1Kc6Se4MMoT4Ma9eH3iyoHXOORB2ZWBwysO5gQQR5VlA1FXtk6OZoMaj9JGThZQBgHP1ZAAAG7wAp2wVAla5qs3fTaxiBMlwiMMhkOTIrDYqyLlgQf/jNVziPpftV2hhmlPcTpjQ+8ksP3atMVXSJ0bIpWj+Jelq8faKOGEewyN8WwP6tVfiPSe9m+lupmHgHKL71jwp94rWfGt98E+p9DcS49bQfTTxR+TOoPuGcmqrxH0rWEeRH1sxG3YTSPjJpyPMZrRYFc1tPir6x6my+JemGdsiC3jTwMjNIf3V0j8zVX4j054jNnVcuqn6sWIgPegDfEmq5StZwwvhOkdppGdtTsWb7TEs3xO9SXAOp1SdZ1evq/mjLq6nXqXOvT4prAztnGai67Rpk8j54q1JKX8LJFhhazDMHXW+pvoEfQweHGmPW+VMUnaD94B8sZnEek7sGElvsS+oM2lCJ41WVdhvmVWkVgcgsedeAt4wmYZNC6cMWUnV45yPPlyqTkijMSIHICWyZUDVqTTkMueRGd/aD415L86XfC2jqXjccvkrl50lnkcSZVGVy66RyLRrE3rZyGWNcjkTk99Rl1dPK2uRi7YAyTk4AwB7ANsV6WFmZX0ghdiSTvgD+JqWPAY8lesbUudQIC7AZIGM7/AOt69C8+LFw3yYLFVdEBSpifggAyJVAwD2gVAyM4JySD7QKh61x5YyLcsrUuexSlK1KilKUApXBNbI9H/o6aYrcXalYeaRHZpPAuPqp5cz7OeeTIoW2OiZ9DPRxo0e8kGDKoSIEb9XnUW9jELjyQHvrZ9dVUAYG1V3pFcNM3yGBsPIuZ3U4MMByCQRykfBVPDtN9Xfzbp1W2ZtnfocesSe57rm4eVPONVWGNh5MkKuPx1Yq8beFURURQqqoVVHIADAA8gK9qqBXjNErqVYBlYFSCMggjBBB5ivalAVRZX4d2X1PZfVk3Z7YfZk72h8H5p9bs9oWeNwwBBBBGQRuCD3g13IqtPwyW0JezGuE7takhQO8tbsdkP82ewe7RuSB26W9ELe+TEg0yAYSVfXXyP2l+6fdg71pDpT0TuLFsTLqjJwsq7xt4A/Yb7p92a+gOE8YiuFJjbdTpdGBWSNvsyId1Pt58xkVmzwq6lXUMrDBDAEEHuIPMVpjy1HXRKej5VpW3+lPoojfMlkwibn1T5MZ/C3rJ7Nx4AVq3i3CZrZ+rniaNu7UNm81Ydlh7Ca7seab6LJ7MKlKVsSK7wxlmVRzYhR7ScV0r1tLho3WRcakYMM7jIORVXvXBK75LHHwmKIkMhlKnntvn7udvfWJxe4gbKpHoK5wV2BPLfGxz410/lfXsQdR2J23J7/KsWGPshipIK9y6tLZ9VvvDHfjnyrwmssZPbI3/AJO9uKXrKRjwyyHCKCcjuzmp3ilzJBIrodJRYlU+JSJAdvcc1iRWgbGkEHBJJXSMgbdw78DY7czyrH4xclpGGssASB7ORyRz5VbHj/VzbS/b2RV+kc9lkhgt3iEkKNqdiZdTaiDz058Bk93hmsB5Y0yDAWC7Ag5AHx23zUf0f4j1UgB3RyFYeRPMDux4+FS3EbdLdiBOrK3aAAGwzsW338h34rLyPGtZdcvfRrgyQ5540YT2xlVzpKKBnLdxAz374xVfFSvEeKh8BVyBuSQQGPjgH+NRVep4WKscv2+/Pwcnk3F1+0UpXaKNmYKqszHYKoLMT4ADcn2V27OY61lcN4dNPIIoI2kc9yjOB4seSjzJAq5cA9HDu8Xy2T5OJSRHECDK5UaiAd1Q6QTg5OAdhitl9EbiwTNvZgLhdfqOvWKDpMiu4+eAJA1KWG433Fc2TyEuJ5IbIPoR6No7fTNdaZpdiq844z5Z9ds/WO3LAGMnYteFxOkas7sqIoyzMQqgDmSTsBVeN7Pe7W5aC375yMSSDwgRvVU/rWH4Qchhx1Tp7ZQ9+J8YdnNtaBXmGBI7bxW4O+qTHN8EFYwQTtnSN6zuC8JW3QqpLMzF5JG3kkc83c+OwAA2AAAAAAr14Zw2OBBFCgVRv3kkncszHdmJ3LEkk86zqqBSlKAUpSgFKUoCH4rwGOZhKC0U6jCTRkLIo8DkEOv3HBXyzvWF/LE1tteR6oxyuIVYpjxlj3eL2jUm2SV5VZaUB4W1wkih43V0YZVlIZSPEEbEVq/j3HZrl5niikmtwRDBEbfr4Lp0crIzOozEdXZVyQMLnflV3uOjaq5ltZGtpCctowYXP85CewSe9l0v96sS84jPHE8NzE0IZGQXNsDLGpYEaymNcRBOrcMo72oCn8S9GEE6mbh8wXdhoZjJFqUlWVXGWXDAjfVy7q17xrgFzaNieF4xnAb1o29jrld/DOfKtjyWdzBDDNbywvDGkdtBJBqaOKIrqlnYYky7siICQ4XOo8zUzw7pVJpENxBJO2h5JGVYyUgMhWJ5kBC6nQFiq9yk6RyG0Z6nvkt7GjKVt5OhPD+JwfKbMPbay2nYaG0kqGMWTpBxkAFTg7iqRx/oFfWuSYutjH14u2MfeX1l+BHnXXGeK/sTsrBrKfiEhGCQeQ1FVL4Hdrxqx76xAa5rRxNdrZZNro9ZLl2GGYkc8d1eVKVKSXQb2AaUqU4H0dubs4ghZxnBf1Yx7XbA9wyfKobmeWRt9EXXtZ2kkziOKNpHPJUUsfbgch58q2VwX0aWyFjfXSM0aiSSKN9CopzvI5w2Dg74XlVuh4jbWpihtIYkjeN52dm6lRHEyq7bqWkcas4PcNzyzz35KX9JDZQ+Cei2Qr1t9KtvGBqZQylwAMnUx7Cd/wBqp25ktLRALBAYljE9zKjAu9s5kiZo5c6y6FS/YIA04+sK9/kF7eELI8ij5yTVIkfURyJIGt5ICuHYEc1JOVLBsHGc8R2QkYQQfLZuuMuEVGigkbTrxK3YiBddZTUzaiSFNc15Kvtldkc/Dr28IkONadWscmt0jhlhdnFzEm4mjmikQ8ydihPPGfYwwQShLQS3c0SNFHGHHUWyuUZkMunCLlU7LGSQADSMVM/yNPcb3c2E/wDD25ZI+7aSXaSXv2GhSOampyztY4kWOJFRFGFVAFUDwAGwrMghbfgDSMJL1xMwOpIgNNvGQcghDvIw27b5ORkBasVKUApSlAKUpQClKUApSlAKUpQCuCK5pQEFedGYmYyxF7eY7mSAhCx5ZkQgxy/tqfdUFxzhdx1M8UkKyLcACSe1VUnYDC/Owue2NACko5JGcKNqvVKA1dDbSXFy7W7BnE8LLL1piNtBGI9UDWzYdGbS40lcNrBJ2AG0ajOKcEguMGWMFl9SQEpIme9JEIdPcRWB8kvYPopVuo/1c3zcw3+rMg0tgcg6ZPe9AefSDoRZ3eWkiCyH/aR9h/aSNn/aBrWnSH0VXUOWt2Fwn2dklHuPZb2gj2VtSz6Sws6xSh7eZthHMAjMcZxG2Skv7DNU5WkZajpk7PlO5iaNikitGy+srgqw9oO4qw9Hug97d4ZIurjP+0lyi4+6Mam8sDHnX0Dc2EUjI8kaOyHKMyhip8VJ5H2VlVq/KprhE7KF0d9F9pBhp/0mT74xH7o9wR+ItV4EKhdIAC4xgbADwGOVYXFeNQW+BLIAzeogy8r47kjUF3PsBrA+V3s/0US20f6yftzHf6sKHSuRyLvkd6Vg6dPbK7KjY8JlthPBNGPkyuR1sskUFsYXw/WuQDJLcDJBLbZQHUMmsvhfDIipW3tBd6pBJ11wixW6soC64wyl2bG+pVOo/XG2LRadGoVZZZS9xKu4knIcqfGNMBIv2FFTtVBXP+zjTb3szTj9SoMNv7DGCWkG/KRmHkKnYIURQiKqqowFUBVAHcANgK9qUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAY15aRyoY5UWRWGCrqGUjzB2NQp4DLDvZzsg/UzZmg55wuT1kfgNLaR9mlKA8ZulLwlYri2dZ2+jWJ45FlP3HYpp/bC++vf5Jez/AEsq20f6uDDzHf60zjSuRzCJkdz1xSoBIcL4JBbZMUYVm9dyS8j473kfLufaTUnSlSBSlKAUpSgFKUoBSlKAUpSgFKUoD//Z"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">Institución Educativa El Contento Arriba</MDBTypography>
                  <MDBCardText>Puerto Escondido</MDBCardText>
                </div>
              </div>
              
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">¡Bienvenido a la aplicación de votaciones del personero estudiantil!</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBBtn className='me-1' color='warning' onClick={() => manejadorBoton('candidatos')}>
                     Inscribir candidatos
                    </MDBBtn>
                    <MDBBtn className='me-1' color='info' onClick={() => manejadorBoton('votaciones')}>
                     Iniciar votaciones
                    </MDBBtn>
                    <MDBBtn className='me-1' color='success' onClick={() => manejadorBoton('voto')}>
                    Resultados
                    </MDBBtn>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Nuestra amada tierra cordobesa</MDBCardText>
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://www.igac.gov.co/sites/igac.gov.co/files/noticias/image/MONTERIA.png"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://s2.wklcdn.com/image_273/8197254/91132929/59531966.700x525.jpg"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://s1.wklcdn.com/image_119/3594603/91179428/59633776.700x525.jpg"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://colombiaextraordinaria.com/somos_colombia/external/img/img_departamentos/Puerto_Escondidoimagen_h.jpg"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    )
}
export default Home
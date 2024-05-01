<?php
$Productos = array();  //indico que es un array vacio

                      $Productos[0]['Orden']=1;
                      $Productos[0]['imagen']="assets/img/1234.jpg";
                      $Productos[0]['descripcion']="Reloj Tommy Hilfiger de silicona";
                      $Productos[0]['stock']=array("actual" => 20,"minimo" => 20);        
                      $Productos[0]['precio']=179;
                      $Productos[0]['valoraciones']=array("positivas" => 70,"negativas" => 30);
                      $Productos[0]['venta_web']=false;
                      $Productos[0]['monetario_en_stock']=3580; 
                      /***********************************************************/
                      $Productos[1]['Orden']=2;
                      $Productos[1]['imagen']="assets/img/2345.jpg";
                      $Productos[1]['descripcion']="Smart TV Samsung 43\" Full HD T5300 2020";
                      $Productos[1]['stock']=array("actual" => 40,"minimo" => 30);
                      $Productos[1]['precio']=499;
                      $Productos[1]['valoraciones']=array("positivas" => 30,"negativas" => 70);
                      $Productos[1]['venta_web']=false;
                      $Productos[1]['monetario_en_stock']=19960;
                      /***********************************************************/
                      $Productos[2]['Orden']=3;
                      $Productos[2]['imagen']="assets/img/3456.jpg";
                      $Productos[2]['descripcion']="Cafetera Nespresso Citiz & Milk Cherry";
                      $Productos[2]['stock']=array("actual" => 50,"minimo" => 15);
                      $Productos[2]['precio']=476;
                      $Productos[2]['valoraciones']=array("positivas" => 92.31,"negativas" => 7.69);
                      $Productos[2]['venta_web']=false;
                      $Productos[2]['monetario_en_stock']=23800;                             
                      /***********************************************************/
                      $Productos[3]['Orden']=4;
                      $Productos[3]['imagen']="assets/img/4567.jpg";
                      $Productos[3]['descripcion']="Parlante Smartlife BT 2.1 55W Rosa";
                      $Productos[3]['stock']=array("actual" => 80,"minimo" => 5);
                      $Productos[3]['precio']=359;
                      $Productos[3]['valoraciones']=array("positivas" => 94.44,"negativas" => 5.56);
                      $Productos[3]['venta_web']=false;
                      $Productos[3]['monetario_en_stock']=28720;
                      /***********************************************************/
                      $Productos[4]['Orden']=5;
                      $Productos[4]['imagen']="assets/img/5678.jpg";
                      $Productos[4]['descripcion']="Lentes Vulk Le Groupie 388/CH74";
                      $Productos[4]['stock']=array("actual" => 50,"minimo" => 10);
                      $Productos[4]['precio']=62;
                      $Productos[4]['valoraciones']=array("positivas" => 95,"negativas" => 5);
                      $Productos[4]['venta_web']=false;
                      $Productos[4]['monetario_en_stock']=3100;
$CantidadDeProductos = count($Productos);
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>1er Desempeño</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.gstatic.com" rel="preconnect">
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
    rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">

  <!-- =======================================================
  * Template Name: NiceAdmin - v2.2.2
  * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>

  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top d-flex align-items-center">

    <div class="d-flex align-items-center justify-content-between">
      <a href="index.html" class="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt="">
        <span class="d-none d-lg-block">NiceAdmin</span>
      </a>
      <i class="bi bi-list toggle-sidebar-btn"></i>
    </div><!-- End Logo -->

  </header><!-- End Header -->
  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item">
        <a class="nav-link " href="index.html">
          <i class="bi bi-grid"></i>
          <span>Home</span>
        </a>
      </li><!-- End Dashboard Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>Productos</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="listado.html">
              <i class="bi bi-circle"></i><span>Los mas vendidos</span>
            </a>
          </li>
        </ul>
      </li><!-- End Components Nav -->

    </ul>

  </aside><!-- End Sidebar-->

  <main id="main" class="main">

    <div class="pagetitle">
      <h1>
        Listado de Productos </h1>

      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Inicio</a></li>
          <li class="breadcrumb-item"><a href="#">Productos</a></li>
          <li class="breadcrumb-item active">Los mas vendidos</li>


        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section dashboard">
      <div class="row">

        <!-- Left side columns -->
        <div class="col-lg-12">
          <div class="row">

            <!-- Top Selling -->
            <div class="col-12">
              <div class="card top-selling overflow-auto">

                <div class="card-body pb-0">
                  <h5 class="card-title">Los mas vendidos </h5>          
                  
                  <table class="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Descripción - Stocks</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Valoraciones</th>
                        <th scope="col">Venta Web</th>
                        <th scope="col">Monetario en stock</th>
                      </tr>
                    </thead>
                    <tbody>
                      <?php                         
                        for ($i = 0; $i < $CantidadDeProductos; $i++) {
                          $producto = $Productos[$i];
                          ?>                           
                          <tr>                                   
                          <th><?php echo $producto['Orden'];?></th>
                          <th><a href=#><img class="imagen" src="<?php echo $Productos[$i]['imagen'];?>" alt="Imagen del producto"></a></th>
                          <th><a href=#><?php echo $producto['descripcion'];?></a></th>
                          <th><h4><span>U$S <?php echo $producto['precio']; ?></span></h4></th>                                                       
                          <th><?php echo $producto['stock']['actual'] ['minimo'];?></th>
                          <th><?php echo $producto['valoraciones']['positivas'] ['negativas'];?>%</th>
                          <th><?php echo $producto['venta_web'];?></th>
                          <th><h4><span><?php echo $producto['monetario_en_stock'];?></span></h4></th>
                          </tr> 
                          <?php } ?>

                        <?php


                          
                            // echo "<tr>";
                            // //MUESTAR NRO DE ORDEN
                            // echo "<th scope=\"row\">".$producto['Orden']."</th>";   
                            // //MUESTAR IMAGEN
                            // echo "<td><a href=\"#\"><img src=\"".$producto['imagen']."\" data-bs-placement=\"left\" data-bs-toggle=\"tooltip\" data-bs-original-title=\"".$producto['Orden']."\"/></a></td>"; 
                            // //LINEAS DESCRIPCION STOCK
                            // echo "<td>";
                            // echo "<a href=\"#\" class=\"text-primary fw-bold\">".$producto['descripcion']."</a>";
                            // echo "<div class=\"progress mt-3\">";
                            // //ANIMA LINEA COLORES

                            // $color = "bg-success";
                            // $stockActual = $producto["stock"]["actual"];
                            // $stockMin = $producto["stock"]["minimo"];          
                            // $dif = $stockActual - $stockMin;
                            // if ($dif<=15)
                            //   $color = "bg-danger";
                            // else
                            //   if ($dif>15 && $dif < 40)
                            //       $color = "bg-warning";
                            //   else
                            //     $color = "bg-success";            
                            
                            // echo "<div class=\"progress-bar progress-bar-striped ".$color." progress-bar-animated\" role=\"progressbar\" style=\"width: ". $producto['stock']['actual']."%\" aria-valuenow=\"".$producto['stock']['actual']."\" aria-valuemin=\"0\" aria-valuemax=\"100\" data-bs-placement=\"bottom\" data-bs-toggle=\"tooltip\" data-bs-original-title='Stock Actual: ".$producto['stock']['actual']." | Min.: ". $producto['stock']['minimo']."'></div>";
                            // echo "</div>";
                            // echo "</td>";
                            // //MUESTAR PRECIO        
                            // echo "<td><h4><span class=\"badge border-danger border-1 text-danger\">U\$S " . $producto['precio'] . "</span></h4></td>";
                            // //MUESTRA VALORACIONES
                            // echo "<td>";
                            // echo "Total votos: ".($producto['valoraciones']['positivas']+$producto['valoraciones']['negativas']);
                            // echo "<h5><span title='Votos: Positivos " . $producto['valoraciones']['positivas'] . " y Negativos " . $producto['valoraciones']['negativas'] . "' class=\"badge border-info border-1 text-info\">";
                            // echo round(($producto['valoraciones']['positivas'] / ($producto['valoraciones']['positivas'] + $producto['valoraciones']['negativas'])) * 100, 2) . "% ";
                            // echo "<i class=\"bi bi-hand-thumbs-up-fill danger\"></i> | ";
                            // echo round(($producto['valoraciones']['negativas'] / ($producto['valoraciones']['positivas'] + $producto['valoraciones']['negativas'])) * 100, 2) . "% ";
                            // echo "<i class=\"bi bi-hand-thumbs-down-fill danger\"></i>";
                            // echo "</h5>";
                            // echo "</td>";
                            // //MUESTRA CARRITOS
                            // echo "<td>";
                            // echo "<h3><span data-bs-placement=\"bottom\" data-bs-toggle=\"tooltip\" data-bs-original-title='" . ($producto['venta_web'] ? 'Se permite venta web' : 'No se permite venta web') . "' class=\"badge border-" . ($producto['venta_web'] ? 'success' : 'danger') . " border-1 text-" . ($producto['venta_web'] ? 'success' : 'danger') . "\"><i class=\"bi bi-cart" . ($producto['venta_web'] ? '4' : '-x') . "-fill\"></i></span></h3>";
                            // //MUESTRA MONETARIO EN STOCK
                            // echo "</td>";
                            // echo "<td><h4><span class=\"badge border-info border-1 text-info\">U\$S " . $producto['monetario_en_stock'] . "</span></h4></td>";
                            // echo "</tr>";
                               
                      // echo "</tbody>";
                      // echo "</table>";
                     ?>                                                   
                    </tbody>
                  </table> 

                </div>

              </div>
            </div><!-- End Top Selling -->

            <div class="col-xxl-4 col-md-6">
              <div class="card info-card revenue-card">

                <div class="card-body">
                  <h5 class="card-title">
                    PRODUCTOS <span>| Cantidad para la venta web</span> </h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-patch-check-fill"></i>
                    </div>
                    <div class="ps-3">
                      <h6>3</h6>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div class="col-xxl-4 col-md-6">
              <div class="card info-card revenue-card">

                <div class="card-body"><!--  Stock Actual * Precio -->
                  <h5 class="card-title">
                    Total <span>| Monetario en Stock</span> </h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-currency-dollar"></i>
                    </div>
                    <div class="ps-3">
                      <h6>U$S 79160</h6>
                    </div>
                  </div>
                </div>

              </div>
            </div>


          </div><!-- End Left side columns -->
        </div>

    </section>

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer" class="footer">
    <div class="copyright">
      &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
    </div>
    <div class="credits">
      <!-- All the links in the footer should remain intact. -->
      <!-- You can delete the links only if you purchased the pro version. -->
      <!-- Licensing information: https://bootstrapmade.com/license/ -->
      <!-- Purchase the pro version with working html/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </footer><!-- End Footer -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
      class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files 2023-->
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Template Main JS File 2023-->
  <script src="assets/js/main.js"></script>

</body>

</html>
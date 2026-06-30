-- =====================================================================
-- Trigger: cuando se inserta un lead del webinar julio 2026,
-- crea automáticamente la fila en flujos_embudo.
-- BD compartida: tfwnekfuqxpnezbjcbpj
-- =====================================================================

CREATE OR REPLACE FUNCTION public.fn_flujo_webinar_julio_2026()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.source = 'webinar-julio-2026-administrador-fincas' THEN
    INSERT INTO public.flujos_embudo (
      lead_id,
      nombre_flujo,
      status_actual,
      actividad,
      tags_proceso,
      fecha_ultima_interaccion
    ) VALUES (
      NEW.id,
      'webinar-julio-2026',
      'nuevo',
      'lead_activo',
      ARRAY['nuevo', 'webinar-2026', 'julio-2026', 'ia-administrador-fincas'],
      NOW()
    )
    ON CONFLICT (lead_id, nombre_flujo) DO UPDATE SET
      status_actual            = 'recurrente',
      actividad                = 'lead_activo',
      fecha_ultima_interaccion = NOW();
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_flujo_webinar_julio_2026 ON public.leads;

CREATE TRIGGER trg_flujo_webinar_julio_2026
  AFTER INSERT OR UPDATE ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.fn_flujo_webinar_julio_2026();

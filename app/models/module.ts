export interface ModuleInterface {
  id: string;
  name: string;
  description: string;
  company: string;
  has_eurorack_power_entry: boolean;
  has_rear_video_sync_input: boolean;
  has_rear_video_sync_output: boolean;
  hp: number;
  is_sync_ref_required: boolean;
  max_neg_12v_ma: number;
  max_pos_12v_ma: number;
  mounting_depth_mm: number;
  subtitle: string;
  frontpanel: string;
  legend: string;
  has_front_video_sync_output: boolean;
  has_front_video_sync_input: boolean;
  is_hidden: boolean;
  has_dc_barrel_power_entry: boolean;
  has_eurorack_power_sync_input: boolean;
  has_eurorack_power_sync_output: boolean;
  has_rear_14_pin_sync_input: boolean;
  has_rear_14_pin_sync_output: boolean;
  is_sync_generator: boolean;
  external_url: string;
}
